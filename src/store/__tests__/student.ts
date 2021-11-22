// import mockStore from "../../utils/mockStore";
import StudentsList,{
  addStudent,
  initialState
} from "../student";

const mockData =
  {
    "id": "Id 1637586198021",
    "firstName": "melek",
    "lastName": "mliki",
    "birthday": "26/02/1996",
    "course": "dsqdd",
    "hours": "23",
    "price": "25"
}
// const mockError = "Oops! Something went wrong.";

describe("StudentsList reducer", () => {
  it("should handle initial state", () => {
    // @ts-expect-error
    expect(StudentsList(undefined, {})).toEqual(initialState);
  });
});

describe("StudentsList action", () => {
  it('should dispatch the add Student action', () => {
    
    expect(
      StudentsList(undefined, {
        type: addStudent.type,
        payload:  mockData ,
      })
    ).toEqual(
      [...initialState,mockData]
    );
	});
});
