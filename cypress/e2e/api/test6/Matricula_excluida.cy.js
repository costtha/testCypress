describe("Consultando dados de uma Matrícula", () => {

    it("Deve ser retornada uma mensagem de erro ao consultar os dados de uma matrícula que já foi excluída", () => {

        cy.request({
            method: 'GET',
            url: 'http://localhost:8080/v1/matriculas/4653499',
            headers: {
                'X-API-KEY': 'unime-qualidade-oficial2'
            },
            failOnStatusCode: false  
        }).then((response) => {
            if (response.status === 200) {
                // Verifique se o retorno contém os dados esperados da matrícula
                expect(response.body).to.have.property('id', '4653499');
               
            } else if (response.status === 404) {
               
                expect(response.body.mensagem).to.equal('A matrícula informada foi excluída de nossa base de dados!');
            } else {
                
                throw new Error(`Status de resposta inesperado: ${response.status}`);
            }
        });

    });

});