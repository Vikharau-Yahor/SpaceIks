
function App() {
    let fullName: string = `Bob Bobbington`;
    let additionalDiv: React.JSX.Element = <div> Additional Block </div>;
    let number: number = '5';
    return (
        <>
            <h1>Vite + React</h1>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
                Author is <b> {fullName}</b>
            </p>
            { additionalDiv }
        </>
    )
}

export default App
