### ✅ Melhorias aplicadas
1. Separação da normalização e validação → ajuda na testabilidade e reutilização.

2. Fallback consistente de mensagens com defaultMessages.

3. Validação de sobrenome adicionada (caso deseje garantir nomes compostos).

4. Tipo I18nContext opcional simplificado (sem precisar do mock direto no código).

5 .Tipagem mais clara e nome de métodos mais expressivos.

| Método/Função          | Descrição                                                            |
| ---------------------- | -------------------------------------------------------------------- |
| `constructor(...)`     | Inicializa o `NameVO`, normaliza e valida o nome com suporte a i18n. |
| `getValue()`           | Retorna o nome armazenado.                                           |
| `equals(other)`        | Compara com outro `NameVO`.                                          |
| `normalize(name)`      | Remove espaços extras e padroniza o nome.                            |
| `assertIsValid(...)`   | Valida comprimento, conteúdo e formato do nome.                      |
| `defaultMessages(...)` | Gera mensagens padrão caso `i18n` não seja fornecido.                |
