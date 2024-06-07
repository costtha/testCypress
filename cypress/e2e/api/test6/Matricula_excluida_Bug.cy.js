describe("Consulta de matrícula inexistente", () => {
    it("Deve retornar um código de status 404 ao consultar uma matrícula inexistente", () => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8080/v1/matriculas/4653499', // Usando um ID de matrícula inexistente
        headers: {
          'X-API-KE': 'unime-qualidade-oficial2'
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(404);
  
        // Verificando se a mensagem de erro é uma das esperadas
        const expectedMessages = [
          'A matrícula informada não foi encontrada.',
          'A matrícula informada foi excluída de nossa base de dados!'
        ];
        expect(expectedMessages).to.include(response.body.mensagem);
      });
    });
  });
