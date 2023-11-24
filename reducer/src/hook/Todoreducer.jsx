export default function reducer(state, action) {
  switch (action.type) {
    case "getvalue":
      return {
        value: action.value,
        alltodos: state.alltodos,
      };

    case "addtodo":
      return {
        value: "",
        alltodos: [...state.alltodos, action.value],
      };
      default:
        break;
  }
}
