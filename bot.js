const express = require("express");
const app = express();
const Telegraf = require('telegraf')
const bot = new Telegraf ('your Token')

bot.start((ctx) => ctx.reply('Bem-Vindo!'));
bot.on('new_chat_members', (ctx) => ctx.reply(`Bem vindo ao High School Dev ${ctx.from.first_name}, Meu nome é Gaby se tiver alguma dúvida é só mandar uma mensagem com o meu nome "Gaby" que eu já te retorno`));
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('Gaby', (ctx) => ctx.reply(`Oi ${ctx.from.first_name}, como posso ajudar 😊 ?`));
bot.hears('Oi Gaby', (ctx) => ctx.reply(`Oi ${ctx.from.first_name}, como posso ajudar 😊 ?`));
bot.hears('Oi gaby', (ctx) => ctx.reply(`Oi ${ctx.from.first_name}, como posso ajudar 😊 ?`));

bot.hears('Oi Gaby, tudo bem ?', (ctx) => ctx.reply(`tudo, e você ? `));
bot.hears('Oi gaby, tudo bem ?', (ctx) => ctx.reply(`tudo, e você ? `));
bot.hears('Oi gaby tudo bem ?', (ctx) => ctx.reply(`tudo, e você ? `));
bot.hears('Gaby, tudo bem ?', (ctx) => ctx.reply(`tudo, e você ? `));

//Porta
  const porta = process.env.PORTA || 3000;
  app.listen(porta);
