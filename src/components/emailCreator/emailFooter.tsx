/* eslint-disable @next/next/no-img-element */
'use client'

export function EmailFooter() {
  return (
    <tr>
      <td style={{ backgroundColor: "#231f20" }}>
        <table role="presentation" cellSpacing="0" cellPadding="0" border={0} width="100%">
          <tr>
            <td style={{ width: "60%", padding: "30px" }}>
              <table align="center" role="presentation" cellSpacing="0" cellPadding="0" border={0} style={{ margin: "auto" }}>
                <tr>
                  <td style={{ textAlign: "center" }}>
                    <a
                      href="https://www.cupraofficial.pt/cupra-city-garage/agenda-eventos?utm_source=html&utm_medium=email&utm_campaign=ccg_janeiro&utm_content=link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://microsites.cupraofficial.pt/Emailings/CCG2025/01_janeiro/cupra_logo.png"
                        width="218"
                        height="auto"
                        alt="CUPRA City Garage"
                        style={{ height: "auto", display: "block" }}
                        className="g-img g-imgs"
                      />
                    </a>
                  </td>
                </tr>
              </table>
            </td>
            <td style={{ width: "40%", padding: "30px 30px 30px 0px" }}>
              <table align="left" role="presentation" cellSpacing="0" cellPadding="0" border={0} style={{ margin: "auto" }}>
                <tr>
                  <td>
                    <a href="https://www.instagram.com/cupra_portugal/" target="_blank" rel="noopener noreferrer">
                      <img
                        src="https://microsites.cupraofficial.pt/Emailings/CCG2025/01_janeiro/instagram.png"
                        width="25"
                        height="26"
                        alt="Instagram CUPRA"
                      />
                    </a>
                  </td>
                  <td style={{ paddingLeft: "20px" }}>
                    <a href="https://www.facebook.com/CUPRAPortugal/" target="_blank" rel="noopener noreferrer">
                      <img
                        src="https://microsites.cupraofficial.pt/Emailings/CCG2025/01_janeiro/facebook.png"
                        width="14"
                        height="26"
                        alt="Facebook CUPRA"
                      />
                    </a>
                  </td>
                  <td style={{ paddingLeft: "20px" }}>
                    <a href="https://www.youtube.com/channel/UCvoMQCROXB-zF3cC9HmPAjw/" target="_blank" rel="noopener noreferrer">
                      <img
                        src="https://microsites.cupraofficial.pt/Emailings/CCG2025/01_janeiro/youtube.png"
                        width="29"
                        height="23"
                        alt="Youtube CUPRA"
                      />
                    </a>
                  </td>
                </tr>
              </table>
              <table align="left" role="presentation" cellSpacing="0" cellPadding="0" border={0} style={{ margin: "auto" }}>
                <tr>
                  <td style={{
                    padding: 0,
                    fontFamily: "Cupra, 'Poppins', Arial, 'Open Sans', 'Helvetica Neue', Helvetica, sans-serif",
                    fontSize: "8px",
                    color: "#fff"
                  }}>
                    <p style={{ marginBottom: "5px", color: "#d8ddf3 !important", fontWeight: 700 }}>
                      CUPRA 2025© Todos os direitos reservados.
                    </p>
                    <p style={{ fontSize: "6px", lineHeight: "7px", marginBottom: "5px", color: "#d8ddf3 !important", fontWeight: 500 }}>
                      *Este evento não é afiliado, associado, autorizado, endossado, mantido, patrocinado, ou de qualquer forma oficialmente ligado à Microsoft, Xbox, Forza, ou Turn 10 ou a qualquer uma das suas filiais ou afiliadas. A utilização de qualquer franchise Forza ou de qualquer marca ou nome comercial Forza Horizon 5, é apenas para fins de identificação e referência e não indica qualquer associação com a Microsoft, Xbox, Forza, ou Turn 10.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  )
}
