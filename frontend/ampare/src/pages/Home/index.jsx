import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AmpareLogo from "../../assets/Vector.svg";
import AmpareLogoAzul from "../../assets/ampare-logo2.svg";
import Input from "../../components/Input/input";
import "./style.css";

function Home() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const inputName = useRef();
  const inputBirthdate = useRef();
  const inputDocument = useRef();
  const inputAddress = useRef();
  const inputOtherText = useRef();

  // New state variable to track selected gender
  const [selectedGender, setSelectedGender] = useState("");

  function createUsers() {
    let gender = "Não informado";
    if (selectedGender === "Masculino") {
      gender = "Masculino";
    } else if (selectedGender === "Feminino") {
      gender = "Feminino";
    } else if (selectedGender === "Outro") {
      gender = inputOtherText.current.value || "Outro (não especificado)";
    }

    const newUser = {
      id: Date.now(),
      name: inputName.current.value,
      birthdate: inputBirthdate.current.value,
      gender,
      document: inputDocument.current.value || "Não informado",
      address: inputAddress.current.value || "Não informado",
    };

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    clearInputs();
    navigate("/list");
  }

  function clearInputs() {
    inputName.current.value = "";
    inputBirthdate.current.value = "";
    setSelectedGender("");
    if (inputOtherText.current) {
      inputOtherText.current.value = "";
    }
    inputDocument.current.value = "";
    inputAddress.current.value = "";
  }

  return (
    <>
      <section className="section">
        <div className="banner">
          <div className="banner-content-container">
            <div className="banner-content">
              <img src={AmpareLogo} className="ampare-logo"/>
              <h3 className="banner-text">O extraordinário habita na</h3>
              <span className="text-span">simplicidade</span>
            </div>
          </div>
        </div>
        <div className="form-header-container">
          <div className="form-header-content">
            <img src={AmpareLogoAzul} style={{width: 70, height: 50}} className="ampare-logo"/>
            <h2 style={{fontWeight: 200, color: '#005E91', fontSize: 'xx-large' }}>Grupo <span style={{fontWeight: 600}}>Ampare</span></h2>
          </div>
          <h1 style={{fontWeight: 700, color: '#005E91', marginTop: 80}}>Controle de pessoas Banho Solidário 2024</h1>
        </div>
      </section>
      <div className="container">
        <form>
          <>

          <Input label="Qual é o seu nome hein?" type="text" />

          <div className="form-group">
            <label>Qual a sua data de nascimento?</label>
            <input placeholder="Data de nascimento" type="date" ref={inputBirthdate} />
          </div>

          <div className="form-group">
            <label>Sexo</label>
            <div className="gender-options">
              <div>
                <input
                  type="radio"
                  id="masculino"
                  name="gender"
                  value="Masculino"
                  checked={selectedGender === "Masculino"}
                  onChange={(e) => setSelectedGender(e.target.value)}
                />
                <label htmlFor="masculino">Masculino</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="feminino"
                  name="gender"
                  value="Feminino"
                  checked={selectedGender === "Feminino"}
                  onChange={(e) => setSelectedGender(e.target.value)}
                />
                <label htmlFor="feminino">Feminino</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="outro"
                  name="gender"
                  value="Outro"
                  checked={selectedGender === "Outro"}
                  onChange={(e) => setSelectedGender(e.target.value)}
                />
                <label htmlFor="outro">Outro</label>
                <input
                  type="text"
                  placeholder="Especifique"
                  ref={inputOtherText}
                  disabled={selectedGender !== "Outro"}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>CPF ou RG (opcional)</label>
            <input placeholder="CPF ou RG" type="text" ref={inputDocument} />
          </div>

          <div className="form-group">
            <label>Endereço (opcional)</label>
            <textarea placeholder="Endereço" ref={inputAddress}></textarea>
          </div>

          <button type="button" onClick={createUsers}>
            Enviar
          </button>
          </>
        </form>
        </div>
      </>
  );
}

export default Home;
