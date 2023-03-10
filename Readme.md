# EPIC 001: MANUTENIR CONSULTAS DE ANIMAIS
# EPIC 002: MANUTENIR PRODUTOS PARA VENDA

# EPIC 002 / USER STORY 001:

Eu como gerente da clínica
desejo conseguir cadastrar produtos no sistema
para conseguir utilizar eles para venda

## CRITÉRIOS DE ACEITAÇÃO

O usuário do perfil gerente deve conseguir cadastrar produtos seguindo as serguintes regras de negócio:
RN-001: Produtos devem ter os seguintes atributos: nome, descrição, preço, ativo
RN-002: Produto não deve ter nome vazio
RN-003: Produto não deve ter preço vazio (valor 0 não é valor vazio)
RN-004: Não pode ser possível cadastrar produtos com nomes duplicados

Também leve em consideração a possibilidade de exclusão lógica dos registros

# EPIC 002 / USER STORY 002:

Eu como gerente da clínica
desejo conseguir visualizar os produtos já cadastrados no sistema
para ter um melhor controle sobre o que já foi cadastrado e o que deve ser cadastrado

## CRITÉRIOS DE ACEITAÇÃO
O usuário do perfil gerente deve conseguir visualizar os produtos previamente cadastrados em uma listagem
que permite filtros, respeitando as seguintes regras de négócio
RN-005: Produtos inativos devem ter uma indicação vermelha
RN-006: Produtos excluídos não podem aparecer na listagem
RN-007: Deve ser possível filtrar a listagem pelo nome do produto

