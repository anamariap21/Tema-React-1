/*
Folosește React pentru a afișa următorul cod în elementul cu ID #app

<div class="vh-100 d-flex flex-column">
    <header class="navbar bg-primary bg-gradient">
        <div class="container-fluid">
            <h1 class="navbar-brand mb-0 text-white">Tema React</h1>
        </div>
    </header>
    <main class="container my-5 flex-grow-1 d-flex flex-column align-items-center justify-content-center">
        <ul class="list-group">
            <li class="list-group-item">
                <span class="fw-bold">Lista de cumpărături</span>
            </li>
            <li class="list-group-item">Pâine</li>
            <li class="list-group-item">Lapte</li>
            <li class="list-group-item">Ciocolată</li>
            <li class="list-group-item">Mere</li>
            <li class="list-group-item">Miere</li>
            <li class="list-group-item">Mandarine</li>
        </ul>
    </main>
</div>
*/

const ingredients = ["Pâine", "Lapte", "Ciocolată", "Miere", "Mere", "Mandarine"];

export default function App() {
    return (
        <div>
            <div className="vh-100 d-flex flex-column">
                <header className="navbar bg-primary bg-gradient">
                    <div className="container-fluid">
                        <h1 className="navbar-brand mb-0 text-white">Tema React Pacurar</h1>
                    </div>
                </header>
                <main className="container my-5 flex-grow-1 d-flex flex-column align-items-center justify-content-center">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <span className="fw-bold">Lista de cumpărături</span>
                        </li>
                        {ingredients.map((ingredient) => (
                            <li className="list-group-item" key={ingredient}>
                                {ingredient}
                            </li>
                        ))}
                    </ul>
                </main>
            </div>
        </div>
    )}
