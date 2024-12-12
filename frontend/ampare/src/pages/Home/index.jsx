import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AmpareLogo from "../../assets/Vector.svg";
import AmpareLogoAzul from "../../assets/ampare-logo2.svg";
import Input from "../../components/Input/input";
import RadioButton from "../../components/RadioButton/radioButton";
import TextArea from "../../components/TextArea/textarea";
import Button from "../../components/Button/button";
import { createUser } from "../../services/api";
import "./style.css";

function Home() {
  const navigate = useNavigate();
  const inputName = useRef();
  const inputBirthdate = useRef();
  const inputDocument = useRef();
  const inputAddress = useRef();
  const inputOtherText = useRef();
  const [selectedGender, setSelectedGender] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !inputName.current?.value ||
      !inputBirthdate.current?.value ||
      !selectedGender
    ) {
      alert(
        "Por favor, preencha todos os campos obrigatórios (Nome, Data de Nascimento e Sexo)",
      );
      return;
    }

    if (selectedGender === "Outro" && !inputOtherText.current?.value) {
      alert("Por favor, especifique o gênero");
      return;
    }

    const userData = {
      name: inputName.current?.value || "",
      birthdate: inputBirthdate.current?.value,
      gender:
        selectedGender === "Outro"
          ? inputOtherText.current?.value
          : selectedGender,
      document: inputDocument.current?.value || "",
      address: inputAddress.current?.value || "",
    };

    try {
      await createUser(userData);
      clearInputs();
      alert("Cadastro realizado com sucesso!");
    } catch (error) {
      alert("Erro ao cadastrar usuário");
      console.error(error);
    }
  };

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
              <img src={AmpareLogo} className="ampare-logo" />
              <h3 className="banner-text">O extraordinário habita na</h3>
              <span className="text-span">simplicidade</span>
            </div>
          </div>
        </div>
        <div className="form-header-container">
          <div className="form-header-content">
            <img
              src={AmpareLogoAzul}
              style={{ width: 70, height: 50 }}
              className="ampare-logo"
            />
            <h2
              style={{
                fontWeight: 200,
                color: "#005E91",
                fontSize: "xx-large",
              }}
            >
              Grupo <span style={{ fontWeight: 600 }}>Ampare</span>
            </h2>
          </div>
          <h1 style={{ fontWeight: 700, color: "#005E91", marginTop: 80 }}>
            Controle de pessoas Banho Solidário 2024
          </h1>
        </div>
      </section>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <Input
            label="Nome *"
            type="text"
            ref={inputName}
            placeholder="Nome completo"
            required
          />
          <Input
            label="Data de Nascimento *"
            type="date"
            ref={inputBirthdate}
            required
            placeholder="Data de nascimento"
          />

          <div className="form-group">
            <label>Sexo *</label>
            <div className="gender-options">
              <RadioButton
                label="Masculino"
                name="gender"
                value="Masculino"
                checked={selectedGender === "Masculino"}
                onChange={(e) => setSelectedGender(e.target.value)}
              />
              <RadioButton
                label="Feminino"
                name="gender"
                value="Feminino"
                checked={selectedGender === "Feminino"}
                onChange={(e) => setSelectedGender(e.target.value)}
              />
              <RadioButton
                label="Outro"
                name="gender"
                value="Outro"
                checked={selectedGender === "Outro"}
                onChange={(e) => setSelectedGender(e.target.value)}
              />
              {selectedGender === "Outro" && (
                <Input
                  type="text"
                  placeholder="Especifique"
                  ref={inputOtherText}
                />
              )}
            </div>
          </div>

          <Input
            label="CPF ou RG (opcional)"
            type="text"
            ref={inputDocument}
            placeholder="CPF ou RG"
          />

          <TextArea
            label="Endereço (opcional)"
            ref={inputAddress}
            placeholder="Endereço"
          />

          <Button type="submit" text="Enviar" />
        </form>
      </div>
    </>
  );
}

export default Home;
