package apifuncs

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type PutJson struct {
	ID int `json:"id,omitempty"`
}

func PutTask(c *gin.Context) {
	var json PutJson
	c.ShouldBindJSON(&json)
	c.JSON(http.StatusOK, json)
}
