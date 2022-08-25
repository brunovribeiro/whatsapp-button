Como publicar?

- Após realizar as alterações de código atualize o número da versão no package.json;
- Execute `npm run build`;
- Confirme e faça o upload de todas as alterações para o github;
- Execute `npm login` e insira suas credenciais do https://www.npmjs.com/; (Somente na primeira vez).
- Execute `npm publish`. (Prestar atenção na saída do comando para ver se não deu erro);

Para testar localhost: 
    - Substitua a hash da tag `<snapbot-button>`, em `/demo/index.html`, pelo que deseja testar;
    - Em `/src/_config.ts` troque a `baseUrl` para seu localhost. (Não esquecer de voltar para o da produção antes de buildar);
    - Execute `npm start` para iniciar o projeto e abrir no navegador;