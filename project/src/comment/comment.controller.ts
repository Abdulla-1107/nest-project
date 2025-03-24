import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from "@nestjs/common";
import { CommentService } from "./comment.service";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
import { Request } from "express";
import { ApiTags, ApiOperation, ApiParam, ApiBearerAuth } from "@nestjs/swagger";
import { AuthGuard } from "src/guards/auth.guard";

@ApiTags("Comments")
@ApiBearerAuth()
@Controller("comments")
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: "Yangi comment qo‘shish" })
  async create(@Req() req: Request, @Body() data: CreateCommentDto) {
    const userId = req["user"].id;
    return await this.commentService.create(userId, data);
  }

  @Get(":productId")
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: "Mahsulotga yozilgan barcha commentlarni olish" })
  @ApiParam({ name: "productId", example: "123e4567", description: "Mahsulot ID " })
  async findAll(@Param("productId") productId: string) {
    return await this.commentService.findAll(productId);
  }

  @Get("/:id")
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: "Bitta commentni olish" })
  @ApiParam({ name: "id", example: "987e6543-e89b-12d3-a456-426614174999", description: "comment ID " })
  async findOne(@Param("id") id: string) {
    return await this.commentService.findOne(id);
  }

  @Patch(":id")
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: "commentni yangilash" })
  async update(@Param("id") id: string, @Req() req: Request, @Body() data: UpdateCommentDto) {
    const userId = req["user"].id;
    return await this.commentService.update(id, userId, data);
  }

  @Delete(":id")
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: "commentni o‘chirish" })
  async remove(@Param("id") id: string, @Req() req: Request) {
    const userId = req["user"].id;
    return await this.commentService.remove(id, userId);
  }
}
