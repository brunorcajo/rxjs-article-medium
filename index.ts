
import { Observable } from 'rxjs';

const fetchFake$ = new Observable((subscriber) => {
  const fetch = setInterval(() => {
    subscriber.next({
      status: "success",
      data: [
        { name: "Bruno", lastName: "Orcajo" },
        { name: "Igor", lastName: "Orcajo" },
      ],
    });

    subscriber.complete();
  }, 5000);

  return () => {
    clearInterval(fetch);
  };
});

const observer = {
  next: (data) => console.log(data),
  error: (err) => console.log(err),
  complete: () => console.log("completed")
};

const subscriber = fetchFake$.subscribe(observer);
