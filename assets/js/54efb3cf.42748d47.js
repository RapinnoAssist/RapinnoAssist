"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1387],{3362:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"creating-intents","metadata":{"permalink":"/RapinnoAssist/blog/creating-intents","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"Creating Intents","description":"What is an Intent?","date":"2021-08-01T00:00:00.000Z","tags":[{"inline":true,"label":"nlp","permalink":"/RapinnoAssist/blog/tags/nlp"}],"readingTime":7.74,"hasTruncateMarker":true,"authors":[{"name":"Athul Anand","title":"Solution Architect","url":"https://github.com/Athul100","imageURL":"https://avatars.githubusercontent.com/u/19280884?s=400&u=de358f353fed20bfe9f5c6f81d38527441fc4c7c&v=4","key":"athul"}],"frontMatter":{"slug":"creating-intents","title":"Creating Intents","authors":["athul"],"tags":["nlp"]},"unlisted":false},"content":"## What is an Intent?\\n\\nAn intent is the bot user\'s intention. It is used to understand what the user wants to do. Suppose you are building a  bot for banking domain, the users may\\nwant to check their account balance or find the nearest branch locator, these can be represented as intents like **checkBalance** or **findBranch** respectively.\\nThese intentions along with the other entities, and products extracted (which would give more context), will be used by the bot\'s inference engine or workflow engine\\nto provide the user an appropriate response.\\n\\nIntent is the basic component of the bot, it can be used to trigger workflows, build intelligent FAQ\'s and the overall performance of the bot depends more on how\\nyou create your **Intents** and its **Utterances**.\\n\\n\x3c!--truncate--\x3e\\n\\n## How to define Intents?\\nDefining good intents is the most important task in building your bot. There are two types of intents you can make in **RapinnoAssist Platform**\\n* __Small Talk Intents__: These intents are used to engage the users with common small talks, eg. queries likes \\"Hello\\", \\"How are you?\\" etc.\\n* __Domain Intents__: These are intents that are specific to the domain, eg. queries like \\"What are the benefits of your Accounts\\", \\"find the nearest branch\\" etc.\\n\\nSome points to keep in mind while creating intents,\\n### Similar Intents\\nWhile creating intents its always better to cluster similar intents. Creating duplicate intents will make the work harder to the bot builder and also reduce the\\nconfidence score of the underlying models. Suppose if you try to create intents like \\"benefitsOfAccount\\", \\"benefitsOfLoan\\", \\"advantagesOfSavings\\" where accounts,\\nloans and savings are part of your product lines, this will create a lot of duplications in utterances as they all intend to know the benefit of some product. These\\ncan be simplified by specifying the products in the knowledge graph and defining a single intent eg: \\"showBenefits\\", this will increase the confidence of model and\\nalso reduce data creation time. As the combination of intent and product can be used in the bot. Similarly in cases of entities.\\n\\n## Choosing a Featurizer\\nFeaturizers play a vital role in the task of intent recognition, it decides how the intent recognition should interpret the utterances. for example in a token based\\nfeaturizer, the model will interpret the data in more of a morphological level, while a contextual embedding can capture more semantic meaning.\\n\\nRapinnoAssist deals with the following featurizers,\\n### Frequency Based\\nFrequency based Featurizers analysis the in a morphological level, or token level. It gives importance to the words in utterances and its frequencies rather than the\\noverall meaning of the sentence or word.\\n\\nIdeal for cases with lesser training data, and very narrow domain.\\n### Word Level\\nThis goes a step beyond the Frequency Level, by capturing the meaning of the words. for example \\"benefits\\" and \\"advantages\\" would be treated similarly.\\n\\nIdeal for low training data, and slightly broader domain\\n### Contextual Level\\nContextual Featurizers are state of the art models that captures the sentence level meaning, it gives more semantic level understanding to the bot. Even though it\\nrequires more data than the other\'s it gives a more broader understanding which makes in favourable. They also provide multi-lingual support.\\n\\nIdeal for high availability of training data, broader domain, also in cases where multi-lingual data is present.\\n\\n## Writing Utterances\\nNow that you have an idea about creating the intents, now its time to add the utterances. Utterances are as important as intents, and writing good utterances,\\nwill improve the accuracy or level of understanding of the bot. How to write good utterances depends on which Featurizer you have selected, even though the platform\\nhave preprocessing in place so that most utterances will work. Writing specific utterances for featurizer would be more ideal.\\n\\nSome guidelines on how to write utterances for different featurizers,\\n### Frequency Level\\n* Add only the words that are relevant to the intent. eg. for knowing the benefits of a product, instead of \\"I want to know the benefit of a product\\" just use the\\nrelevant words maybe \\"know benefits\\".\\n* Frequency level considers the frequencies of words, so avoid repetition of lower priority words, eg. utterances like \\"get benefits\\", \\"get advantages\\", \\"get features\\".\\nEven though the platform preprocess and identifies few of these cases, its better to avoid such repetitions.\\n* There is no minimum number of utterances, depends on the range of the words.\\n* No meaning would be captured so all synonyms, abbreviations etc. need to be added.\\n\\n### Word Level\\n* The guidelines of Frequency Level, are also applicable to Word Level, but it also considers the meaning of the words, so all\\nsynonyms need not be added, for eg. if \\"get benefits\\" is added \\"get advantages\\" might also be identified provided the other utterances doesn\'t contradict this.\\n* Minimum of 4-8 utterance per intent would be ideal.\\n\\n### Contextual Level\\n* On contrary to the previous guidelines, contextual level requires the utterance to be more complete sentences rather than just important words.\\nThese utterances are more like how the user will ask the questions.\\n* It needs to be a mix of complete and incomplete sentence, for eg. for knowing the benefits utterances likes \\"what are its benefits\\" as well as \\"what are the benfits of the product\\"\\nis required. it is not required that it needs to be the same sentence, also it could be \\"tell me about the benefits of the product\\". The point is it should be a\\nboth complete and incomplete sentences.\\n* Writing one word phrases only in an utterance, is only advisable when the only possible user interaction is one word.\\n* It is advisable to keep the utterances grammatically correct and avoiding spelling mistakes.\\n* It captures the meaning of the words, still a few of the synonyms can be added to utterance to get better accuracy. eg. \\"what are its benefits\\" and \\"tell me about the advantages\\"\\n* It is ideal not to use the same type of question and just replace the synonyms likes \\"what are the benefits\\" and \\"what are the advantages\\". Instead phrase the\\nutterances in different possible ways.\\n* Minimum of 8-10 utterances per intent is advisable, depending on the intents it may increase.\\n* In case of multi lingual utterances, the main language can have 8-10 utterance per intent, but slightly lesser data around 5-6 would be fine for other languages.\\n* These embeddings tries to draw a relation between multiple languages so even if trained in one language it can identify some grammatically similar languages.\\n\\n### Key points to keep in mind\\n* __Use of Abbreviations__:\\nIt is better not to use abbreviations in the training data as it may not be able to capture its meaning. In cases of abbreviations it is advisable to define it\\nin the dictionary rather than just adding in utterances. So the base words meaning can be captured correctly.\\n* __Use of special characters__:\\nSpecial characters need to be used only if they are relevant to the utterance. Using numbers or character just to complete the sentence is not advisable.\\n* __Spelling Mistake and Grammatical Errors__\\nEven though the platform have spell correctors in place to deal with minor spelling errors, it is always better to avoid it in utterances itself in order to avoid any\\nconfusions. Utterances are the supervised part of intent recognitions, avoiding errors in it grammatically(in case of Contextual featurizer) or spelling would\\nmake the intent recognition more accurate.\\n* __Semantic Variations__:\\nIt is better to add semantically variant utterance than always reusing the same sentence and just changing a few words. It helps deal with semantic ambiguities\\nwhich will improve the model performance.\\n* __Length of utterance__:\\nIt depends on how the users will phrase the queries. Shorter phrases would do better in most cases. If the users always use longer phrases, you can add longer\\nphrases.\\n* __Balanced Number of Utterance__:\\nIt is important the all intents have a balanced number of utterances. If its less utterances or more, it needs to be balanced. In order avoid any biases in the models.\\n* __OOV or Domain Specific Words__:\\nDomain specific words like words which are only relevant to your domain, it would be better to add its meaning and synonyms in the dictionary. Else it will be triggered on\\nexact matches only, or even get spell corrected.\\n\\n\\n\\n## Some ways to deal with the lack of training data\\nWhile creating bots, adding the utterance is one of the major task, and coming up with different utterances sometimes be difficult.\\n\\nThese are a few ways to help you with that,\\n### Assisted utterances suggestions\\nDuring the utterance creation time the platform has the capability to suggest you utterances, which are similar to the utterance you added.\\nIn order for it to work better a complete sentence as a base utterance can help the model get more context and suggest you many possible utterances.\\n\\n### Validate Failed Utterances\\nAll the queries which the bot couldn\'t identify or identified with a very low confidence would be logged as failed queries and you can validate it by specifying\\nits corresponding intents. This will be added to the utterances and reflected in the bot next time.\\n\\n\\n\\n\x3c!---REF: https://help.clustaar.com/en/articles/2117627-how-to-create-good-intents-for-your-chatbot\\n     https://blog.rasa.com/rasa-nlu-in-depth-part-1-intent-classification/\\n     https://developer.kore.ai/docs/bots/chatbot-overview/nlp-guide/\\n     https://blog.engati.com/intent-entity-business-chatbot/ --\x3e"}]}}')}}]);