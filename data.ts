import { User } from "./types";
import { scan, startWith, shareReplay, Subject } from "rxjs";

export const subject: Subject<User> = new Subject();

export const collections = subject.pipe(
  scan((acc, cur) => {
    return [...acc, cur];
  }, [] as User[]),
  startWith([]),
  shareReplay(1)
);
