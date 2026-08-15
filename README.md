# cra-e2e

Throwaway repository used to end-to-end test the
[`anglesen1120/code-review-agent`](https://github.com/anglesen1120/code-review-agent)
GitHub Action.

Setup used for the test:

- Branch protection on `main` with **Require conversation resolution before merging**.
- Repository secret `DEEPSEEK_API_KEY`.
- PR from `feature/add-orders` introduces `src/orders.js` with two planted bugs
  (a Critical SQL-injection and a Warning missing-null-check) so the review
  should post two inline threads and block merge until they are resolved.
