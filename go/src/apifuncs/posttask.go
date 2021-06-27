package apifuncs

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type PostJson struct {
	Detail   string `json:"detail,omitempty"`
	Deadline string `json:"deadline,omitempty"`
}

func PostTask(c *gin.Context) {
	var json PostJson
	c.ShouldBindJSON(&json)
	c.JSON(http.StatusOK, json)

}
