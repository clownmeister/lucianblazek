export type Handler<E> = (event: E) => void;

export class EventDispatcher<E> {
  private handlers: Handler<E>[] = [];

  fire (event: E): void {
    for (const handler of this.handlers) { handler(event); }
  }

  register (handler: Handler<E>): void {
    this.handlers.push(handler);
  }
}
