describe("Consultando dados de uma Matrícula", () => {

    it("Deve ser retornada uma mensagem de erro ao consultar os dados de uma matrícula inválida", () => {

        cy.request({
            method: 'GET',
            url: 'http://localhost:8080/v1/matriculas/22222222222',
            headers: {
                'X-API-KEY': 'unime-qualidade-oficial2'
            },
            failOnStatusCode: false // Adicionando a opção para não falhar no status 400
        }).then((response) => {
            // Verifica se o status code é 400, indicando que a requisição falhou devido a uma matrícula inválida
            expect(response.status).to.eq(400);
            // Verifica se a mensagem de erro retornada é "A matrícula informada não parece ser válida!"
            expect(response.body.mensagem).to.equal('A matrícula informada não parece ser válida!');
        });

    });

});