export const First = (state: number = 0, action: any): number => {
    switch (action.type) {
        case "Increase":
            return state + 1
        case "Decrease":
            return state <= 0 ? 0 : state - 1;
        case "Reset":
            return state = 0;

        default:
            return state;
    }
};

export const LogInStatus = (state: any = true, action: any) => {

    switch (action.type) {
        case "ChangeStatus":
            return !state;
        default:
            return state
    }

}