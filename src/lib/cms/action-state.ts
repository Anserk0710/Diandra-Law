export type FieldErrors = Record<
  string,
  string[] | undefined
>;

export type ActionState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: FieldErrors;
};

export type CmsFormAction = (
  previousState: ActionState,
  formData: FormData,
) => Promise<ActionState>;

export const INITIAL_ACTION_STATE: ActionState = {
  status: "idle",
};

export function getFirstFieldError(
  state: ActionState,
  fieldName: string,
) {
  return state.fieldErrors?.[fieldName]?.[0];
}