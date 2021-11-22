import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import mockStore from "../../../utils/mockStore";
import Home from "../Home";

describe("<Home />", () => {
  const renderHelper = (reducer = [{
    "id": "Id1637586198021",
    "firstName": "melek",
    "lastName": "mliki",
    "birthday": "26/02/1996",
    "course": "ReactJs",
    "hours": "23",
    "price": "25"
  }]) => {
    const { dispatch, ProviderWithStore } = mockStore({ studentList: reducer });
    const { container } = render(
      <ProviderWithStore>
        <MemoryRouter>
          {/* 
            @ts-expect-error */}
          <Home />
        </MemoryRouter>
      </ProviderWithStore>
    );

    return { dispatch, firstChild: container.firstChild };
  };

  it("renders the <List /> if loading was successful", () => {
    const reducer = 
      [
        {
          "id": "Id1637586198021",
          "firstName": "melek",
          "lastName": "mliki",
          "birthday": "26/02/1996",
          "course": "ReactJs",
          "hours": "23",
          "price": "25"
        },
      ];

    expect(renderHelper(reducer).firstChild).toMatchSnapshot();
  });
});
