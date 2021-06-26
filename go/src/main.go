package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func rootGet(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "hello world",
	})
}

func main() {
	engine := gin.Default()
	engine.GET("/", rootGet)

	engine.Run(":3000")
}
