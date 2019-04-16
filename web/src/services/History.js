import Axios from 'axios'
import Vue from 'vue'

class History {
  constructor(){}

  async get() {
    return {
      data: {
        "ra": 11086610,
        "disciplinas": [
          {
            "codigo": "BCS0001-13",
            "creditos": "3",
            "categoria": "Obrigatória",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "Base Experimental das Ciências Naturais",
            "ano": "2010",
            "conceito": "C",
          },
          {
            "codigo": "BIK0102-13",
            "creditos": "3",
            "categoria": "Obrigatória",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "Estrutura da Matéria",
            "ano": "2010",
            "conceito": "C"
          },
          {
            "codigo": "BIL0304-13",
            "creditos": "3",
            "categoria": "Obrigatória",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "Origem da Vida e Diversidade dos Seres Vivos",
            "ano": "2010",
            "conceito": "B"
          },
          {
            "codigo": "BIM0005-13",
            "creditos": "2",
            "categoria": "Obrigatória",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "Bases Computacionais da Ciência",
            "ano": "2010",
            "conceito": "C"
          },
          {
            "codigo": "BIN0003-13",
            "creditos": "4",
            "categoria": "Obrigatória",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "Bases Matemáticas",
            "ano": "2010",
            "conceito": "C"
          },
          {
            "codigo": "BCJ0208-13",
            "creditos": "5",
            "categoria": "Obrigatória",
            "periodo": "3",
            "situacao": "Reprovado",
            "disciplina": "Fenômenos Mecânicos",
            "ano": "2010",
            "conceito": "F"
          },
          {
            "codigo": "BCL0306-13",
            "creditos": "3",
            "categoria": "Obrigatória",
            "periodo": "3",
            "situacao": "Aprovado",
            "disciplina": "Transformações nos Seres Vivos e Ambiente",
            "ano": "2010",
            "conceito": "C"
          },
          {
            "codigo": "BCM0504-13",
            "creditos": "3",
            "categoria": "Obrigatória",
            "periodo": "3",
            "situacao": "Aprovado",
            "disciplina": "Natureza da Informação",
            "ano": "2010",
            "conceito": "C"
          },
          {
            "codigo": "BCN0402-13",
            "creditos": "4",
            "categoria": "Obrigatória",
            "periodo": "3",
            "situacao": "Aprovado",
            "disciplina": "Funções de Uma Variável",
            "ano": "2010",
            "conceito": "D"
          },
          {
            "codigo": "BCN0404-13",
            "creditos": "3",
            "categoria": "Obrigatória",
            "periodo": "3",
            "situacao": "Aprovado",
            "disciplina": "Geometria Analítica",
            "ano": "2010",
            "conceito": "B"
          },
          {
            "codigo": "ESTO005-13",
            "creditos": "2",
            "categoria": "Livre Escolha",
            "periodo": "3",
            "situacao": "Aprovado",
            "disciplina": "Introdução às Engenharias",
            "ano": "2010",
            "conceito": "C"
          },
          {
            "codigo": "BCJ0205-13",
            "creditos": "4",
            "categoria": "Obrigatória",
            "periodo": "1",
            "situacao": "Reprovado",
            "disciplina": "Fenômenos Térmicos",
            "ano": "2011",
            "conceito": "F"
          },
          {
            "codigo": "BCJ0208-13",
            "creditos": "5",
            "categoria": "Obrigatória",
            "periodo": "1",
            "situacao": "Aprovado",
            "disciplina": "Fenômenos Mecânicos",
            "ano": "2011",
            "conceito": "C"
          },
          {
            "codigo": "BCL0307-13",
            "creditos": "5",
            "categoria": "Obrigatória",
            "periodo": "1",
            "situacao": "Aprovado",
            "disciplina": "Transformações Químicas",
            "ano": "2011",
            "conceito": "C"
          },
          {
            "codigo": "BCM0505-13",
            "creditos": "5",
            "categoria": "Obrigatória",
            "periodo": "1",
            "situacao": "Reprovado",
            "disciplina": "Processamento da Informação",
            "ano": "2011",
            "conceito": "F"
          },
          {
            "codigo": "BCN0405-13",
            "creditos": "4",
            "categoria": "Obrigatória",
            "periodo": "1",
            "situacao": "Reprovado",
            "disciplina": "Introdução às Equações Diferenciais Ordinárias",
            "ano": "2011",
            "conceito": "F"
          },
          {
            "codigo": "BIR0004-13",
            "creditos": "3",
            "categoria": "Obrigatória",
            "periodo": "1",
            "situacao": "Aprovado",
            "disciplina": "Bases Epistemológicas da Ciência Moderna",
            "ano": "2011",
            "conceito": "C"
          },
          {
            "codigo": "BCJ0209-13",
            "creditos": "5",
            "categoria": "Obrigatória",
            "periodo": "2",
            "situacao": "Reprovado",
            "disciplina": "Fenômenos Eletromagnéticos",
            "ano": "2011",
            "conceito": "F"
          },
          {
            "codigo": "BCL0308-13",
            "creditos": "5",
            "categoria": "Obrigatória",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "Transformações Bioquímicas",
            "ano": "2011",
            "conceito": "D"
          },
          {
            "codigo": "BCM0506-13",
            "creditos": "3",
            "categoria": "Obrigatória",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "Comunicação e Redes",
            "ano": "2011",
            "conceito": "A"
          },
          {
            "codigo": "BCN0407-13",
            "creditos": "4",
            "categoria": "Obrigatória",
            "periodo": "2",
            "situacao": "Repr.Freq",
            "disciplina": "Funções de Várias Variáveis",
            "ano": "2011",
            "conceito": "O"
          },
          {
            "codigo": "ESTO003-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "Fundamentos de Desenho e Projeto",
            "ano": "2011",
            "conceito": "C"
          },
          {
            "codigo": "BCK0103-13",
            "creditos": "3",
            "categoria": "Obrigatória",
            "periodo": "3",
            "situacao": "Reprovado",
            "disciplina": "Física Quântica",
            "ano": "2011",
            "conceito": "F"
          },
          {
            "codigo": "BIJ0207-13",
            "creditos": "2",
            "categoria": "Obrigatória",
            "periodo": "3",
            "situacao": "Repr.Freq",
            "disciplina": "Energia: Origens, Conversão e Uso",
            "ano": "2011",
            "conceito": "O"
          },
          {
            "codigo": "BIN0406-13",
            "creditos": "3",
            "categoria": "Obrigatória",
            "periodo": "3",
            "situacao": "Repr.Freq",
            "disciplina": "Introdução à Probabilidade e à Estatística",
            "ano": "2011",
            "conceito": "O"
          },
          {
            "codigo": "BIR0603-13",
            "creditos": "3",
            "categoria": "Obrigatória",
            "periodo": "3",
            "situacao": "Aprovado",
            "disciplina": "Ciência, Tecnologia e Sociedade",
            "ano": "2011",
            "conceito": "A"
          },
          {
            "codigo": "BCJ0205-13",
            "creditos": "4",
            "categoria": "Obrigatória",
            "periodo": "1",
            "situacao": "Reprovado",
            "disciplina": "Fenômenos Térmicos",
            "ano": "2012",
            "conceito": "F"
          },
          {
            "codigo": "BCN0405-13",
            "creditos": "4",
            "categoria": "Obrigatória",
            "periodo": "1",
            "situacao": "Repr.Freq",
            "disciplina": "Introdução às Equações Diferenciais Ordinárias",
            "ano": "2012",
            "conceito": "O"
          },
          {
            "codigo": "BIQ0602-13",
            "creditos": "3",
            "categoria": "Obrigatória",
            "periodo": "1",
            "situacao": "Reprovado",
            "disciplina": "Estrutura e Dinâmica Social",
            "ano": "2012",
            "conceito": "F"
          },
          {
            "codigo": "ESTO004-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "1",
            "situacao": "Repr.Freq",
            "disciplina": "Instrumentação e Controle",
            "ano": "2012",
            "conceito": "O"
          },
          {
            "codigo": "ESTO006-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "1",
            "situacao": "Reprovado",
            "disciplina": "Materiais e Suas Propriedades",
            "ano": "2012",
            "conceito": "F"
          },
          {
            "codigo": "BCN0407-13",
            "creditos": "4",
            "categoria": "Obrigatória",
            "periodo": "2",
            "situacao": "Reprovado",
            "disciplina": "Funções de Várias Variáveis",
            "ano": "2012",
            "conceito": "F"
          },
          {
            "codigo": "BIJ0207-13",
            "creditos": "2",
            "categoria": "Obrigatória",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "Energia: Origens, Conversão e Uso",
            "ano": "2012",
            "conceito": "B"
          },
          {
            "codigo": "BIN0406-13",
            "creditos": "3",
            "categoria": "Obrigatória",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "Introdução à Probabilidade e à Estatística",
            "ano": "2012",
            "conceito": "D"
          },
          {
            "codigo": "BIQ0602-13",
            "creditos": "3",
            "categoria": "Obrigatória",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "Estrutura e Dinâmica Social",
            "ano": "2012",
            "conceito": "B"
          },
          {
            "codigo": "ESTO007-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "2",
            "situacao": "Reprovado",
            "disciplina": "Mecânica dos Fluidos I",
            "ano": "2012",
            "conceito": "F"
          },
          {
            "codigo": "ESTX104-13",
            "creditos": "3",
            "categoria": "Livre Escolha",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "Engenharia Econômica",
            "ano": "2012",
            "conceito": "C"
          },
          {
            "codigo": "BCJ0205-13",
            "creditos": "4",
            "categoria": "Obrigatória",
            "periodo": "3",
            "situacao": "Aprovado",
            "disciplina": "Fenômenos Térmicos",
            "ano": "2012",
            "conceito": "B"
          },
          {
            "codigo": "BCK0103-13",
            "creditos": "3",
            "categoria": "Obrigatória",
            "periodo": "3",
            "situacao": "Aprovado",
            "disciplina": "Física Quântica",
            "ano": "2012",
            "conceito": "C"
          },
          {
            "codigo": "BCM0505-13",
            "creditos": "5",
            "categoria": "Obrigatória",
            "periodo": "3",
            "situacao": "Aprovado",
            "disciplina": "Processamento da Informação",
            "ano": "2012",
            "conceito": "B"
          },
          {
            "codigo": "BCN0405-13",
            "creditos": "4",
            "categoria": "Obrigatória",
            "periodo": "3",
            "situacao": "Aprovado",
            "disciplina": "Introdução às Equações Diferenciais Ordinárias",
            "ano": "2012",
            "conceito": "C"
          },
          {
            "codigo": "ESTO007-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "3",
            "situacao": "Aprovado",
            "disciplina": "Mecânica dos Fluidos I",
            "ano": "2012",
            "conceito": "D"
          },
          {
            "codigo": "ESTO008-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "3",
            "situacao": "Aprovado",
            "disciplina": "Mecânica dos Sólidos I",
            "ano": "2012",
            "conceito": "A"
          },
          {
            "codigo": "BCK0104-13",
            "creditos": "3",
            "categoria": "Obrigatória",
            "periodo": "1",
            "situacao": "Aprovado",
            "disciplina": "Interações Atômicas e Moleculares",
            "ano": "2013",
            "conceito": "B"
          },
          {
            "codigo": "BIS0002-13",
            "creditos": "2",
            "categoria": "Obrigatória",
            "periodo": "1",
            "situacao": "Aprovado",
            "disciplina": "Projeto Dirigido",
            "ano": "2013",
            "conceito": "A"
          },
          {
            "codigo": "ESTO004-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "1",
            "situacao": "Aprovado",
            "disciplina": "Instrumentação e Controle",
            "ano": "2013",
            "conceito": "B"
          },
          {
            "codigo": "ESTO006-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "1",
            "situacao": "Aprovado",
            "disciplina": "Materiais e Suas Propriedades",
            "ano": "2013",
            "conceito": "C"
          },
          {
            "codigo": "ESTO009-13",
            "creditos": "3",
            "categoria": "Livre Escolha",
            "periodo": "1",
            "situacao": "Aprovado",
            "disciplina": "Métodos Experimentais em Engenharia",
            "ano": "2013",
            "conceito": "C"
          },
          {
            "codigo": "MCTB001-13",
            "creditos": "6",
            "categoria": "Obrigatória",
            "periodo": "1",
            "situacao": "Aprovado",
            "disciplina": "Álgebra Linear",
            "ano": "2013",
            "conceito": "B"
          },
          {
            "codigo": "BCJ0209-13",
            "creditos": "5",
            "categoria": "Obrigatória",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "Fenômenos Eletromagnéticos",
            "ano": "2013",
            "conceito": "A"
          },
          {
            "codigo": "BCN0407-13",
            "creditos": "4",
            "categoria": "Obrigatória",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "Funções de Várias Variáveis",
            "ano": "2013",
            "conceito": "C"
          },
          {
            "codigo": "MCTA004-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "Arquitetura de Computadores",
            "ano": "2013",
            "conceito": "A"
          },
          {
            "codigo": "MCTX023-13",
            "creditos": "4",
            "categoria": "Obrigatória",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "Matemática Discreta",
            "ano": "2013",
            "conceito": "A"
          },
          {
            "codigo": "MC3310",
            "creditos": "6",
            "categoria": "Livre Escolha",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "Banco de Dados",
            "ano": "2013",
            "conceito": "B"
          },
          {
            "codigo": "MCTA015-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "3",
            "situacao": "Aprovado",
            "disciplina": "Linguagens Formais e Automata",
            "ano": "2013",
            "conceito": "A"
          },
          {
            "codigo": "MCTB013-13",
            "creditos": "4",
            "categoria": "Obrigatória",
            "periodo": "3",
            "situacao": "Aprovado",
            "disciplina": "Evolução dos Conceitos Matemáticos",
            "ano": "2013",
            "conceito": "A"
          },
          {
            "codigo": "MCTX033-13",
            "creditos": "4",
            "categoria": "Obrigatória",
            "periodo": "3",
            "situacao": "Aprovado",
            "disciplina": "Cálculo Numérico",
            "ano": "2013",
            "conceito": "B"
          },
          {
            "codigo": "NHI2049-13",
            "creditos": "4",
            "categoria": "Opção Limitada",
            "periodo": "3",
            "situacao": "Aprovado",
            "disciplina": "Lógica Básica",
            "ano": "2013",
            "conceito": "A"
          },
          {
            "codigo": "NHI5002-13",
            "creditos": "4",
            "categoria": "Obrigatória",
            "periodo": "3",
            "situacao": "Aprovado",
            "disciplina": "Didática",
            "ano": "2013",
            "conceito": "A"
          },
          {
            "codigo": "MCTD006-13",
            "creditos": "4",
            "categoria": "Obrigatória",
            "periodo": "1",
            "situacao": "Aprovado",
            "disciplina": "Fundamentos de Análise",
            "ano": "2014",
            "conceito": "A"
          },
          {
            "codigo": "MCTD011-13",
            "creditos": "4",
            "categoria": "Obrigatória",
            "periodo": "1",
            "situacao": "Aprovado",
            "disciplina": "Práticas de Ensino de Matemática no Ensino Fundamental",
            "ano": "2014",
            "conceito": "A"
          },
          {
            "codigo": "NHH2017-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "1",
            "situacao": "Aprovado",
            "disciplina": "Filosofia da Educação",
            "ano": "2014",
            "conceito": "A"
          },
          {
            "codigo": "NHI5001-13",
            "creditos": "4",
            "categoria": "Obrigatória",
            "periodo": "1",
            "situacao": "Aprovado",
            "disciplina": "Desenvolvimento e Aprendizagem",
            "ano": "2014",
            "conceito": "A"
          },
          {
            "codigo": "BHO0101-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "Estado e Relações de Poder",
            "ano": "2014",
            "conceito": "C"
          },
          {
            "codigo": "BHP0201-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "Temas e Problemas em Filosofia",
            "ano": "2014",
            "conceito": "A"
          },
          {
            "codigo": "MCTD015-13",
            "creditos": "4",
            "categoria": "Opção Limitada",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "Tendências em Educação Matemática",
            "ano": "2014",
            "conceito": "B"
          },
          {
            "codigo": "NHI5010-13",
            "creditos": "2",
            "categoria": "Obrigatória",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "LIBRAS",
            "ano": "2014",
            "conceito": "B"
          },
          {
            "codigo": "NHT5004-13",
            "creditos": "4",
            "categoria": "Obrigatória",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "Educação Científica, Sociedade e Cultura",
            "ano": "2014",
            "conceito": "B"
          },
          {
            "codigo": "NHZ5008-09",
            "creditos": "2",
            "categoria": "Livre Escolha",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "História da Ciência e Ensino",
            "ano": "2014",
            "conceito": "A"
          },
          {
            "codigo": "MCTA017-13",
            "creditos": "4",
            "categoria": "Opção Limitada",
            "periodo": "3",
            "situacao": "Aprovado",
            "disciplina": "Programação Matemática",
            "ano": "2014",
            "conceito": "B"
          },
          {
            "codigo": "MCTA027-13",
            "creditos": "4",
            "categoria": "Opção Limitada",
            "periodo": "3",
            "situacao": "Aprovado",
            "disciplina": "Teoria dos Grafos",
            "ano": "2014",
            "conceito": "B"
          },
          {
            "codigo": "MCZA019-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "3",
            "situacao": "Aprovado",
            "disciplina": "Programação para Web",
            "ano": "2014",
            "conceito": "A"
          },
          {
            "codigo": "NHT5013-13",
            "creditos": "4",
            "categoria": "Obrigatória",
            "periodo": "3",
            "situacao": "Aprovado",
            "disciplina": "Práticas de Ensino de Ciências e Matemática no Ensino Fundamental",
            "ano": "2014",
            "conceito": "A"
          },
          {
            "codigo": "ATC-BCT",
            "creditos": "0",
            "categoria": "-",
            "periodo": "1",
            "situacao": "Apr.S.Nota",
            "disciplina": "Atividades Complementares",
            "ano": "2015",
            "conceito": "-"
          },
          {
            "codigo": "MCTA001-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "1",
            "situacao": "Reprovado",
            "disciplina": "Algoritmos e Estruturas de Dados I",
            "ano": "2015",
            "conceito": "F"
          },
          {
            "codigo": "MCTA003-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "1",
            "situacao": "Repr.Freq",
            "disciplina": "Análise de Algoritmos",
            "ano": "2015",
            "conceito": "O"
          },
          {
            "codigo": "MCTA009-13",
            "creditos": "2",
            "categoria": "Livre Escolha",
            "periodo": "1",
            "situacao": "Aprovado",
            "disciplina": "Computadores, Ética e Sociedade",
            "ano": "2015",
            "conceito": "B"
          },
          {
            "codigo": "MCTA024-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "1",
            "situacao": "Reprovado",
            "disciplina": "Sistemas Digitais",
            "ano": "2015",
            "conceito": "F"
          },
          {
            "codigo": "ESZE006-13",
            "creditos": "2",
            "categoria": "Livre Escolha",
            "periodo": "3",
            "situacao": "Repr.Freq",
            "disciplina": "Subestação e Equipamentos",
            "ano": "2015",
            "conceito": "O"
          },
          {
            "codigo": "MCTB018-13",
            "creditos": "4",
            "categoria": "Opção Limitada",
            "periodo": "1",
            "situacao": "Repr.Freq",
            "disciplina": "Grupos",
            "ano": "2016",
            "conceito": "O"
          },
          {
            "codigo": "MCTB022-13",
            "creditos": "4",
            "categoria": "Opção Limitada",
            "periodo": "1",
            "situacao": "Repr.Freq",
            "disciplina": "Sequências e Séries",
            "ano": "2016",
            "conceito": "O"
          },
          {
            "codigo": "MCZX028-13",
            "creditos": "4",
            "categoria": "Opção Limitada",
            "periodo": "1",
            "situacao": "Repr.Freq",
            "disciplina": "Geometria Não Euclidiana",
            "ano": "2016",
            "conceito": "O"
          },
          {
            "codigo": "MCTA006-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "Circuitos Digitais",
            "ano": "2016",
            "conceito": "B"
          },
          {
            "codigo": "MCTA008-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "Computação Gráfica",
            "ano": "2016",
            "conceito": "A"
          },
          {
            "codigo": "MCTA018-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "Programação Orientada a Objetos",
            "ano": "2016",
            "conceito": "A"
          },
          {
            "codigo": "MCTA026-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "Sistemas Operacionais",
            "ano": "2016",
            "conceito": "B"
          },
          {
            "codigo": "MCZA008-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "Interface Humano-Máquina",
            "ano": "2016",
            "conceito": "A"
          },
          {
            "codigo": "MCZA030-13",
            "creditos": "2",
            "categoria": "Livre Escolha",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "Vida Artificial na Computação",
            "ano": "2016",
            "conceito": "C"
          },
          {
            "codigo": "ESZI013-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "3",
            "situacao": "Aprovado",
            "disciplina": "Informática Industrial",
            "ano": "2016",
            "conceito": "A"
          },
          {
            "codigo": "MCTA002-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "3",
            "situacao": "Aprovado",
            "disciplina": "Algoritmos e Estruturas de Dados II",
            "ano": "2016",
            "conceito": "A"
          },
          {
            "codigo": "MCTA025-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "3",
            "situacao": "Aprovado",
            "disciplina": "Sistemas Distribuídos",
            "ano": "2016",
            "conceito": "A"
          },
          {
            "codigo": "MCTA028-15",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "3",
            "situacao": "Aprovado",
            "disciplina": "Programação Estruturada",
            "ano": "2016",
            "conceito": "A"
          },
          {
            "codigo": "MCZA013-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "3",
            "situacao": "Aprovado",
            "disciplina": "Lógicas Não Clássicas",
            "ano": "2016",
            "conceito": "A"
          },
          {
            "codigo": "MCZA041-14",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "3",
            "situacao": "Aprovado",
            "disciplina": "Processamento de Imagens Utilizando GPU",
            "ano": "2016",
            "conceito": "A"
          },
          {
            "codigo": "MCTA001-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "1",
            "situacao": "Aprovado",
            "disciplina": "Algoritmos e Estruturas de Dados I",
            "ano": "2017",
            "conceito": "A"
          },
          {
            "codigo": "MCTA022-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "1",
            "situacao": "Aprovado",
            "disciplina": "Redes de Computadores",
            "ano": "2017",
            "conceito": "A"
          },
          {
            "codigo": "MCTA023-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "1",
            "situacao": "Aprovado",
            "disciplina": "Segurança de Dados",
            "ano": "2017",
            "conceito": "B"
          },
          {
            "codigo": "MCTA033-15",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "1",
            "situacao": "Aprovado",
            "disciplina": "Engenharia de Software",
            "ano": "2017",
            "conceito": "A"
          },
          {
            "codigo": "MCZA002-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "1",
            "situacao": "Aprovado",
            "disciplina": "Aprendizado de Máquina",
            "ano": "2017",
            "conceito": "A"
          },
          {
            "codigo": "MCTA003-17",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "Análise de Algoritmos",
            "ano": "2017",
            "conceito": "B"
          },
          {
            "codigo": "MCTA007-17",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "Compiladores",
            "ano": "2017",
            "conceito": "A"
          },
          {
            "codigo": "MCTA016-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "Paradigmas de Programação",
            "ano": "2017",
            "conceito": "C"
          },
          {
            "codigo": "MCTA024-13",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "2",
            "situacao": "Aprovado",
            "disciplina": "Sistemas Digitais",
            "ano": "2017",
            "conceito": "A"
          },
          {
            "codigo": "MCTA014-15",
            "creditos": "4",
            "categoria": "Livre Escolha",
            "periodo": "3",
            "situacao": "Aprovado",
            "disciplina": "Inteligência Artificial",
            "ano": "2017",
            "conceito": "B"
          },
          {
            "codigo": "ESTS003-17",
            "creditos": "2",
            "categoria": "Livre Escolha",
            "periodo": "1",
            "situacao": "Repr.Freq",
            "disciplina": "Introdução à Astronáutica",
            "ano": "2018",
            "conceito": "O"
          },
          {
            "codigo": "MCZB015-13",
            "creditos": "4",
            "categoria": "Opção Limitada",
            "periodo": "2",
            "situacao": "Reprovado",
            "disciplina": "Introdução à Criptografia",
            "ano": "2018",
            "conceito": "F"
          }
        ]
      }
    }
    return await Axios.get('/history')
  }
}

export default (new History)