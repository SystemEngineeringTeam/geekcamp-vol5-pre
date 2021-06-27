package apifuncs

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetTask(c *gin.Context) {
	jsons := make([]gin.H, 0)
	jsons = append(jsons, gin.H{"id": "1", "detail": "test", "deadline": "1919-8-10"})
	jsons = append(jsons, gin.H{"id": "2", "detail": "hoge", "deadline": "7654-3-21"})
	c.JSON(http.StatusOK, jsons)
}
