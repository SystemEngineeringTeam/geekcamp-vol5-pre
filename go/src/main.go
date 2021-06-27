package main

import (
	"github.com/SystemEngineeringTeam/geekcamp-vol5-pre/apifuncs"
	"github.com/gin-gonic/gin"
)

func main() {
	engine := gin.Default()
	engine.GET("/task", apifuncs.GetTask)
	engine.POST("/task", apifuncs.PostTask)
	engine.PUT("/task", apifuncs.PutTask)
	engine.Run(":80")
}
