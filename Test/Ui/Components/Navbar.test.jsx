import { AuthContext } from "../../../src/auth";
import { render, screen, fireEvent } from "@testing-library/react";
import { Navbar } from "../../../src/Ui/components/Navbar";
import { MemoryRouter } from "react-router-dom";


const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
      ...(jest.requireActual("react-router-dom")),
      useNavigate: () => mockedUsedNavigate
    }));


describe('Pruebas en <Navbar/>', () => { 

    test('debe de mostrar el nombre del usuario', () => { 

        const contextValue = {
            logged: true,
            user: {
              id: "ABC",
              name: "Karla",
            },
          };
      
          render(
            <AuthContext.Provider value={contextValue}>
              <MemoryRouter>
                <Navbar></Navbar>
              </MemoryRouter>
            </AuthContext.Provider>
          );
          expect(screen.getByText("Karla")).toBeTruthy();

     });

     test('debe de llamar el logout y navigate cuando se hace click en el boton', () => { 

        const logout = jest.fn();

        const contextValue = {
            logged: true,
            user: {
              id: "ABC",
              name: "Karla",
            },
            logout,
          };

    const { getByRole } = render(
            <AuthContext.Provider value={contextValue}>
              <MemoryRouter>
                <Navbar></Navbar>
              </MemoryRouter>
            </AuthContext.Provider>
          );
    const button = getByRole('button');
    fireEvent.click(button);
    expect(logout).toHaveBeenCalled();
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/login', {"replace": true});    
     });
 })