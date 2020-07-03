export interface Log {
  event: (type: Log.Type, data: Log.Data) => void;
}

export namespace Log {
  export type Type = "error" | "action" | "view";

  export type Data = {
    error?: any;
    name?: string;
  };
}
