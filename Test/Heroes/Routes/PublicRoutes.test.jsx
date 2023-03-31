import { AuthContext } from "../../../src/auth";
import { render, screen } from "@testing-library/react";
import { PublicRoutes } from "../../../src/heroes/routes/PublicRoutes";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("Pruebas en <PublicRoutes/>", () => {
  test("Si no esta autenticado se muestra la login page (children)", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoutes>
          <h1>Ruta Publica</h1>
        </PublicRoutes>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Ruta Publica")).toBeTruthy();
  });

  test("Si esta autenticado debe de navegar a una ruta especifica", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "Lalo",
        id: "ABC",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoutes>
                  <h1>Ruta Publica</h1>
                </PublicRoutes>
              }
            ></Route>
            <Route path="marvel" element={<h1>Página Marvel</h1>}></Route>
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Página Marvel")).toBeTruthy();
  });
});
