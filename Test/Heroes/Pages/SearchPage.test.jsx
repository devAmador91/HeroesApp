import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));


describe("Prueba en <SearchPage/>", () => {

  //limpiar mocks
  beforeEach(()=> jest.clearAllMocks());

  test("debe de mostrarse correctamente con valores por defecto", () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage></SearchPage>
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar a batman y el input con el valor del queryString", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchPage></SearchPage>
      </MemoryRouter>
    );

    const input = screen.getByRole("textbox");
    expect(input.value).toBe("batman");

    const img = screen.getByRole("img", { name: "img-heroe" });
    expect(img.src).toContain("/heroes/dc-batman.jpg");

    const div = screen.getByLabelText("div-hidden");
    expect(div.style.display).toBe("none");
  });

  test("debe de mostrar un error si no se encuentra el hero (batman123)", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman123"]}>
        <SearchPage></SearchPage>
      </MemoryRouter>
    );

    const div = screen.getByLabelText("div-hidden");
    const error = screen.findByText("No hero with");
    expect(error).toBeTruthy();
    expect(div.style.display).not.toBe("none");
  });

  test("debe de llamar el navigate a la pantalla nueva", () => {

    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    );
    const input = screen.getByRole('textbox');
    fireEvent.change(input, {target: {name: 'searchText', value: 'superman'}});

    const form = screen.getByRole('form');
    fireEvent.submit(form);
 
    expect(mockedUsedNavigate).toHaveBeenCalledWith(`?q=superman`);
  });
  
});
