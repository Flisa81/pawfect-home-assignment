# API contract

All successful responses use `{ "data": ..., "meta": ... }`.

| Method | Endpoint | Authentication | Client use |
| --- | --- | --- | --- |
| GET | `/pets` | No | Listing/search source |
| GET | `/pets/:id` | No | Detail and edit source |
| POST | `/pets` | Bearer | Create listing |
| PUT | `/pets/:id` | Bearer | Partial/full update |
| DELETE | `/pets/:id` | Bearer | Delete listing |
| POST | `/auth/login` | No | Start admin session |
| POST | `/auth/register` | No | Create admin account |

Pet writes contain `name`, `species`, `breed`, numeric `age`, `gender`, `size`, `color`, `description`, `adoptionStatus`, `location`, and `image: { url, alt }`. Read models additionally contain `id`, `created`, `updated`, and `owner`.

The API root and optional `X-Noroff-API-Key` are configured in `config.js`. Bearer tokens are stored in `sessionStorage`, avoiding a long-lived browser credential.
