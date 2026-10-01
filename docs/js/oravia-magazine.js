/* ============================================================
   ORAVIA MAGAZINE
   Pagination + cover/spread navigation.
   Works with <template data-auto-article-source> and .mag-page.
   ============================================================ */
(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
    } else {
      fn();
    }
  }

  ready(function initOraviaMagazine() {
    var viewer = document.querySelector('[data-magazine]');
    if (!viewer) return;

    var source = viewer.querySelector('template[data-auto-article-source]');
    var backPage = viewer.querySelector('[data-mag-back-page]');
    var cover = viewer.querySelector('.mag-cover');
    if (!cover) return;

    var current = 0; // 0 = cover; 1+ = spread/page index after cover
    var isMobile = false;
    var media = window.matchMedia('(max-width: 979px)');

    function makePage() {
      var page = document.createElement('section');
      page.className = 'mag-page';
      page.setAttribute('data-mag-generated', '');

      var inner = document.createElement('div');
      inner.className = 'mag-page-inner mag-article';
      inner.style.height = '100%';
      inner.style.overflow = 'hidden';

      var number = document.createElement('div');
      number.className = 'mag-page-number';
      inner.appendChild(number);
      page.appendChild(inner);

      if (backPage) viewer.insertBefore(page, backPage);
      else viewer.appendChild(page);
      return page;
    }

    function pageInner(page) {
      return page.querySelector('.mag-page-inner');
    }

    function setMeasureMode(page, on) {
      if (on) {
        page.style.display = 'block';
        page.style.visibility = 'hidden';
        page.style.pointerEvents = 'none';
        page.style.left = '0';
        page.style.width = isMobile ? '100%' : '50%';
        page.style.zIndex = '-1';
      } else {
        page.removeAttribute('style');
      }
    }

    function overflows(page) {
      var inner = pageInner(page);
      if (!inner) return false;
      return inner.scrollHeight > page.clientHeight + 1;
    }

    function isSectionTitle(node) {
      return node && node.nodeType === 1 && node.classList.contains('mag-section-title');
    }

    function sourceBlocks() {
      if (!source || !source.content) return [];
      var blocks = [];
      var sectionCount = 0;

      Array.from(source.content.childNodes).forEach(function (node) {
        if (node.nodeType === 3 && !node.textContent.trim()) return;
        if (node.nodeType === 8) return;

        if (node.nodeType === 1 && node.hasAttribute('data-mag-section')) {
          // Every section after the first gets an explicit pagination boundary.
          // This is handled by paginate(), not by CSS, so it works with the
          // generated magazine pages as well as with long multi-page sections.
          if (sectionCount > 0) {
            var sectionBreak = document.createElement('span');
            sectionBreak.setAttribute('data-mag-section-break', '');
            blocks.push(sectionBreak);
          }
          sectionCount += 1;

          var title = node.querySelector('.mag-section-title');
          var body = node.querySelector('[data-mag-section-body]');
          if (title) blocks.push(title.cloneNode(true));
          if (body) {
            Array.from(body.childNodes).forEach(function (child) {
              if (child.nodeType === 3 && !child.textContent.trim()) return;
              if (child.nodeType === 8) return;
              blocks.push(child.cloneNode(true));
            });
          }
        } else {
          blocks.push(node.cloneNode(true));
        }
      });

      return blocks;
    }

    function splitTextElement(node, page) {
      if (!node || node.nodeType !== 1) return null;
      var tag = node.tagName;
      if (tag !== 'P' && tag !== 'BLOCKQUOTE') return null;
      if (node.children.length) return null; // preserve styled/linked inline markup intact

      var words = node.textContent.trim().split(/\s+/);
      if (words.length < 12) return null;

      var inner = pageInner(page);
      var probe = node.cloneNode(false);
      inner.appendChild(probe);

      var lo = 1, hi = words.length - 1, best = 0;
      while (lo <= hi) {
        var mid = Math.floor((lo + hi) / 2);
        probe.textContent = words.slice(0, mid).join(' ');
        if (!overflows(page)) {
          best = mid;
          lo = mid + 1;
        } else {
          hi = mid - 1;
        }
      }
      probe.remove();
      if (best < 4 || best >= words.length) return null;

      var first = node.cloneNode(false);
      first.textContent = words.slice(0, best).join(' ');
      var rest = node.cloneNode(false);
      rest.textContent = words.slice(best).join(' ');
      return { first: first, rest: rest };
    }

    function paginate() {
      Array.from(viewer.querySelectorAll('[data-mag-generated]')).forEach(function (p) { p.remove(); });
      if (!source) return;

      isMobile = media.matches;
      var blocks = sourceBlocks();
      if (!blocks.length) return;

      var page = makePage();
      setMeasureMode(page, true);
      var inner = pageInner(page);
      var pending = blocks.slice();

      while (pending.length) {
        var node = pending.shift();

        // A section boundary always starts the next section on a fresh physical
        // page. If the current page is already empty, reuse it rather than
        // creating a blank page.
        if (node.nodeType === 1 && node.hasAttribute('data-mag-section-break')) {
          var currentContent = Array.from(inner.children).filter(function (el) {
            return !el.classList.contains('mag-page-number');
          });
          if (currentContent.length) {
            page = makePage();
            setMeasureMode(page, true);
            inner = pageInner(page);
          }
          continue;
        }

        inner.appendChild(node);

        if (!overflows(page)) continue;

        inner.removeChild(node);

        // Keep a section heading with the first item that follows it.
        var previous = inner.lastElementChild;
        var moveTitle = isSectionTitle(previous);

        // If the current page is otherwise empty, try splitting a long plain paragraph.
        var meaningful = Array.from(inner.children).filter(function (el) {
          return !el.classList.contains('mag-page-number');
        });

        if (meaningful.length === 0 || (meaningful.length === 1 && moveTitle)) {
          if (moveTitle) previous.remove();
          var split = splitTextElement(node, page);
          if (split) {
            if (moveTitle) inner.appendChild(previous);
            inner.appendChild(split.first);
            page = makePage();
            setMeasureMode(page, true);
            inner = pageInner(page);
            pending.unshift(split.rest);
            continue;
          }
          if (moveTitle) inner.appendChild(previous);
          // Oversize non-splittable block: allow it rather than dropping it.
          inner.appendChild(node);
          page = makePage();
          setMeasureMode(page, true);
          inner = pageInner(page);
          continue;
        }

        var titleToMove = null;
        if (moveTitle) {
          titleToMove = previous;
          titleToMove.remove();
        }

        page = makePage();
        setMeasureMode(page, true);
        inner = pageInner(page);
        if (titleToMove) inner.appendChild(titleToMove);
        pending.unshift(node);
      }

      // Remove a trailing completely empty generated page.
      var generated = Array.from(viewer.querySelectorAll('[data-mag-generated]'));
      var last = generated[generated.length - 1];
      if (last) {
        var contentEls = Array.from(pageInner(last).children).filter(function (el) {
          return !el.classList.contains('mag-page-number');
        });
        if (!contentEls.length) last.remove();
      }

      Array.from(viewer.querySelectorAll('[data-mag-generated]')).forEach(function (p) {
        setMeasureMode(p, false);
      });

      numberPagesAndContents();
    }

    function issuePages() {
      return Array.from(viewer.querySelectorAll('.mag-page')).filter(function (p) {
        return !p.classList.contains('mag-cover');
      });
    }

    function numberPagesAndContents() {
      var pages = issuePages();
      pages.forEach(function (page, i) {
        var n = String(i + 1);
        page.setAttribute('data-page-number', n);
        var slot = page.querySelector('.mag-page-number');
        if (slot) slot.textContent = n;
      });

      Array.from(viewer.querySelectorAll('.mag-toc-page[data-toc-for], .toc-page[data-toc-for]')).forEach(function (slot) {
        var id = slot.getAttribute('data-toc-for');
        var heading = viewer.querySelector('.mag-section-title[data-section-id="' + id + '"]');
        var page = heading ? heading.closest('.mag-page') : null;
        if (page && page.getAttribute('data-page-number')) {
          slot.textContent = page.getAttribute('data-page-number');
        }
      });
    }

    function clearShown() {
      Array.from(viewer.querySelectorAll('.mag-page')).forEach(function (p) {
        p.classList.remove('mag-show-left', 'mag-show-right', 'mag-show-single');
      });
    }

    function totalSteps() {
      var pages = issuePages();
      return isMobile ? pages.length : Math.ceil(pages.length / 2);
    }

    function render() {
      isMobile = media.matches;
      clearShown();

      var pages = issuePages();
      var max = totalSteps();
      if (current > max) current = max;
      if (current < 0) current = 0;

      if (current === 0) {
        viewer.classList.add('is-cover');
        cover.classList.add('mag-show-single');
      } else {
        viewer.classList.remove('is-cover');
        if (isMobile) {
          var one = pages[current - 1];
          if (one) one.classList.add('mag-show-single');
        } else {
          var leftIndex = (current - 1) * 2;
          var left = pages[leftIndex];
          var right = pages[leftIndex + 1];
          if (left) left.classList.add('mag-show-left');
          if (right) right.classList.add('mag-show-right');
        }
      }

      var curSlots = document.querySelectorAll('[data-mag-current]');
      curSlots.forEach(function (el) {
        el.textContent = current === 0 ? 'ORAVIA' : String(current);
      });
      document.querySelectorAll('[data-mag-spread-status]').forEach(function (el) {
        el.textContent = current === 0 ? '' : String(current) + ' / ' + String(max);
      });

      document.querySelectorAll('[data-mag-prev]').forEach(function (b) { b.disabled = current === 0; });
      document.querySelectorAll('[data-mag-next]').forEach(function (b) { b.disabled = current >= max; });
    }

    function next() {
      if (current < totalSteps()) {
        current += 1;
        render();
      }
    }

    function prev() {
      if (current > 0) {
        current -= 1;
        render();
      }
    }

    document.querySelectorAll('[data-mag-next]').forEach(function (b) {
      b.addEventListener('click', next);
    });
    document.querySelectorAll('[data-mag-prev]').forEach(function (b) {
      b.addEventListener('click', prev);
    });

    var resizeTimer = null;
    function onLayoutChange() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        var wasMobile = isMobile;
        isMobile = media.matches;
        if (wasMobile !== isMobile) {
          current = 0;
          paginate();
        }
        render();
      }, 100);
    }

    if (media.addEventListener) media.addEventListener('change', onLayoutChange);
    window.addEventListener('resize', onLayoutChange);

    paginate();
    viewer.classList.add('magazine-ready');
    render();

    // Dictionary scripts can listen for this if they want an explicit rescan signal.
    document.dispatchEvent(new CustomEvent('oravia-magazine-ready', { detail: { viewer: viewer } }));
  });
})();
