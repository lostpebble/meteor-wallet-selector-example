import "./App.css";
import { getWalletSelector } from "./WalletSelector";
import "@near-wallet-selector/modal-ui/styles.css";

function App() {
  return (
    <div className="App">
      <h1>Guestbook test</h1>
      <div className="card">
        <button
          onClick={async () => {
            const { modal } = await getWalletSelector();
            modal.show();
          }}
        >
          login
        </button>
      </div>
    </div>
  );
}

export default App;
