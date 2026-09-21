# E4 Power validation notes

## Baseline before 2026-09-21 refinements

At 1280px, the homepage hierarchy is hero, Four Es banner, partner marquee, metrics, and B.R.I.D.G.E. model library. The existing B.R.I.D.G.E. library begins immediately after the metrics with no dedicated offering introduction. The Services desktop header at 1280px renders as a horizontal dark navigation with a gold brand cluster, desktop search field, three dropdown groups, and a Contact link. This establishes the visual baseline for the requested B.R.I.D.G.E. introduction, scroll indicator, navigation additions, and Services theme-toggle reflow correction.

## Services theme-toggle diagnostic

At the baseline 1280px viewport, the Services theme button switches body state between `theme-dark` and `theme-light` without wrapping the generated desktop navigation. The navigation remains a 242.78px `flex` container with `flex-wrap: nowrap`, 36px height, and three group controls. Its left edge shifts 16px because the search field border/visual layout changes. The requested issue is therefore likely visible at a narrower desktop breakpoint, where the present fixed header composition crosses a width threshold. The fix will reserve non-wrapping header space at the intermediate desktop range and tighten controls proactively rather than relying on a theme-dependent reflow.

## Homepage service disclosure diagnostic

The hero disclosure consists of a native `details` element. Its items are presently non-interactive `span.hero-services-item` values arranged in two inline rows, separated only by pipe spans that are hidden at phone widths. This explains the crowded text and lack of navigation. The update will retain the accessible native disclosure but convert the seven named services into independently spaced links to corresponding anchored entries in the existing Services page.
