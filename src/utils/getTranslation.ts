import axios from "axios";

const db = {
    "items": [
      {
        "id": 1,
        "title": {
          "pt": "Trilhas",
          "en": "Steps",
          "es": "Pasos"
        },
        "description": {
          "pt": "Crie planos de estudos especificando aulas e/ou cursos e definindo a ordem que seus alunos devem estudar.",
          "en": "Create study plans by specifying classes or courses and defining the order in which your students should study.",
          "es": "Crea planes de estudio especificando clases o cursos y definiendo el orden en el que tus alumnos deben estudiar."
  
        }
      },
      {
        "id": 2,
        "title": {
          "pt": "Playlists",
          "en": "Playlists",
          "es": "Playlists"
        },
        "description": {
          "pt": "Transforme uma coleção em uma playlist para poder ver vídeos e áudios em sequência e offline.",
          "en": "Turn a collection into a playlist so you can watch videos and audios in sequence and offline.",
          "es": "Convierta una colección en una lista de reproducción para que pueda ver videos y audios en secuencia y sin conexión."
        }
      },
      {
        "id": 3,
        "title": {
          "pt": "Coleções",
          "en": "Collections",
          "es": "Colecciones"
        },
        "description": {
          "pt": "Crie coleções, adicione conteúdos, reorganize ítens e deixe tudo do seu jeito para melhorar a experiência.",
          "en": "Create collections, add content, rearrange items, and have it your way to enhance the experience.",
          "es": "Cree colecciones, agregue contenido, reorganice elementos y déjelo a su manera para mejorar la experiencia."
        }
      }
    ]
  }


export type Language = 'pt' | 'en' | 'es';

interface Translations {
    pt: string;
    en: string;
    es: string;
}

interface IItems  {
    id: number;
    title: Translations;
    description: Translations;
}

export const getItems = async () => await axios.get<IItems[]>("http://localhost:3001/items").catch(() => ({data: db.items}));

export const getTranslation = (data: IItems[], lang: Language) => data.map(({ id, description, title }) => ({ id, description: description[lang], title: title[lang] }));