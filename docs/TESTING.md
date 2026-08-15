# Testing guide

## Automated checks

Run `npm test` and `npm run build`. Tests verify unique, structurally complete seed records and API metadata hydration.

## Manual user-story checks

| Story | Steps | Expected |
| --- | --- | --- |
| Browse | Open `/` | Responsive cards appear with status and core facts |
| Search | Search a name, breed, and city | Results and live count update; no-match state appears |
| Filter | Select species and size | Only matching pets remain |
| Details | Open a card | Correct pet facts, description, owner, and image appear |
| Share | Press share icon | Current URL is copied and confirmation appears |
| Register/login | Submit valid fields | Session begins and admin navigation appears |
| Route guard | Open create while logged out | Redirected to login, then returned after login |
| Create | Submit complete pet form | Pet is saved and its detail page opens |
| Update | Edit any fields | Detail page shows saved values |
| Delete | Confirm deletion | Listing disappears and browser returns home |

## Quality checks before deployment

1. Validate every deployed page with the W3C HTML Markup Validation Service.
2. Run WAVE with no errors; manually inspect heading order and alt text.
3. Run Lighthouse in a clean profile at mobile and desktop sizes.
4. Traverse all controls using Tab, Shift+Tab, Enter, and Space.
5. Test at 320px, 768px, 1024px, and 1440px widths.
6. Disable or throttle the network to confirm readable error states.
7. Confirm create/edit/delete against a non-production API account before release.
