import axios from "axios";
const { REACT_APP_BE_URL } = process.env;


export const getArticles = async () => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  try {
    const response = await axios.get(
      `${REACT_APP_BE_URL}/articles`,
      config
    );
    console.log("hellooo");
    return response.data
  } catch (error) {
      console.log("Fetching all articles error", error.response.data)
      return error.response.data;
  }
};

export const getOneArticle = async(articleId)=> {
    const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
    
      try {
        const response = await axios.get(
          `${REACT_APP_BE_URL}/articles/${articleId}`,
          answers,
          config
        );
        console.log("hellooo");
        return response.data
      } catch (error) {
        console.log("Fetching article error", error.response.data)
        return error.response.data;
      }
    };

export const postArticle = async(articleData)=>{
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
    try {
      const response = await axios.post(
        `${REACT_APP_BE_URL}/articles`,
        articleData,
        config
      );
      console.log("hellooo");
      return response.data
    } catch (error) {
        console.log("Unable post your article", error.response.data)
        return error.response.data;
    }
};

export const editArticle = async(articleData, articleId)=> {
  const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const response = await axios.put(
        `${REACT_APP_BE_URL}/articles/${articleId}`,
        articleData,
        config
      );
      console.log("hellooo");
      return response.data
    } catch (error) {
      console.log("Editing article error", error.response.data)
      return error.response.data;
    }
  };

  export const deleteArticle = async(articleId)=> {
    const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      try {
        const response = await axios.delete(
          `${REACT_APP_BE_URL}/articles/${articleId}`,
          config
        );
        console.log("hellooo");
        return response.data
      } catch (error) {
        console.log("Deleting article error", error.response.data)
        return error.response.data;
      }
    };