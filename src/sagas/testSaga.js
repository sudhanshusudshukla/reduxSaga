import { take } from "redux-saga/effects";

export function* saga() {
  while (true) {
    console.log("Take Saga starting");
    yield take("TEST_MESSAGE");
    console.log("finish message");
  }
}

export function* count() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}
