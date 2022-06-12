/* import * as testSaga from "./testSaga"; */
import * as enteriesSaga from "./entriesSaga";
import * as enteriesDeleteSaga from "./entriesDeleteSaga";
import * as entriedAddSaga from "./entriesAddSaga";
/* export function initSagas(sagaMiddleware) {
  Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
} */

export function initSagas(sagaMiddleware) {
  Object.values(enteriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
  Object.values(enteriesDeleteSaga).forEach(
    sagaMiddleware.run.bind(sagaMiddleware)
  );
  Object.values(entriedAddSaga).forEach(
    sagaMiddleware.run.bind(sagaMiddleware)
  );
}
