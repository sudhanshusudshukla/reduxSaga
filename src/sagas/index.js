/* import * as testSaga from "./testSaga"; */
import * as enteriesSaga from "./entriesSaga";
/* export function initSagas(sagaMiddleware) {
  Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
} */

export function initSagas(sagaMiddleware) {
  Object.values(enteriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}
