import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedbacks-repository';
import express from 'express';
import { SubmitFeedbackService } from './services/submit-feedback-service';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mailer-adapter';

export const routes = express.Router()



routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  try {
  const prismaFeedbacksRepository = new PrismaFeedbackRepository()
  const nodemailerMailAdapter = new NodemailerMailAdapter()

  const submitFeedbackService = new SubmitFeedbackService(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
    )

    await submitFeedbackService.execute({
      type,
      comment,
      screenshot,
    })

  

  return res.status(201).send()
  } catch (err) {
    console.error(err);

    return res.status(500).send;
  }
});
