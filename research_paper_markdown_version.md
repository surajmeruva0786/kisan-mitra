TENCON 2025 - 2025 IEEE Region 10 Conference (TENCON)
| Kisan-Mitra: |            |     |     |              | Empowering |     |     |             | Farmers     |     | with    |     | AI-driven |     |     |
| ------------ | ---------- | --- | --- | ------------ | ---------- | --- | --- | ----------- | ----------- | --- | ------- | --- | --------- | --- | --- |
|              | Generative |     |     |              | Assistance |     |     | Transformer |             |     | Network |     |           | for |     |
|              |            |     |     | Agricultural |            |     |     |             | Advancement |     |         |     |           |     |     |
Aditya Oza Rahul Yadav Dr. Mallikharjuna Rao K Rimjhim Sharma
Undergraduate Student Undergraduate Student Assistant Professor Undergraduate Student
IIIT Naya Raipur IIIT Naya Raipur IIIT Naya Raipur IIIT Naya Raipur
|     | Raipur, | India |     |     |     | Raipur, | India |     | Raipur, | India |     |     | Raipur, | India |     |
| --- | ------- | ----- | --- | --- | --- | ------- | ----- | --- | ------- | ----- | --- | --- | ------- | ----- | --- |
aditya21102@iiitnr.edu.in rahul21102@iiitnr.edu.in mallikharjuna@iiitnr.edu.in rimjhim22100@iiitnr.edu.in
10257311.5202.05066NOCNET/9011.01 :IOD | EEEI 5202© 00.13$/52/2-2773-5133-8-979 | )NOCNET( ecnerefnoC 01 noigeR EEEI 5202 - 5202 NOCNET
Abstract—Agriculture remains the backbone of India’s econ- nomic practices, and weather APIs to deliver region-specific
| omy, | employing | over | two-thirds |     | of the | population | and | con- |     |     |     |     |     |     |     |
| ---- | --------- | ---- | ---------- | --- | ------ | ---------- | --- | ---- | --- | --- | --- | --- | --- | --- | --- |
support.
| tributing  | approximately |            | 19% | to           | the national | GDP.        | This   | paper |           |     |           |     |     |     |     |
| ---------- | ------------- | ---------- | --- | ------------ | ------------ | ----------- | ------ | ----- | --------- | --- | --------- | --- | --- | --- | --- |
|            |               |            |     |              |              |             |        |       | Framework |     | Overview: |     |     |     |     |
| introduces | the           | Generative |     | Agricultural |              | Transformer | (GAT), | a     |           |     |           |     |     |     |     |
novel transformer-based architecture tailored for the Indian • Data:AggregatedfromKCC[13],governmentadvisories
agricultural domain. GAT powers Kisan-Mitra, a multilingual [7], and agricultural content [8].
generativeAIchatbotthatdeliverscontext-aware,region-specific
|          |         |      |            |     |         |     |           |      | • Model: | Transformer-based |      | GAT | trained |     | on domain- |
| -------- | ------- | ---- | ---------- | --- | ------- | --- | --------- | ---- | -------- | ----------------- | ---- | --- | ------- | --- | ---------- |
| guidance | aligned | with | government |     | schemes | and | agronomic | best |          |                   |      |     |         |     |            |
|          |         |      |            |     |         |     |           |      | specific | corpora           | [9]. |     |         |     |            |
practices.UnlikegenericlanguagemodelssuchasBERTorGPT,
GAT integrates domain-specific attention mechanisms, cross- • Fine-Tuning: Focused on crop diseases, subsidies, and
lingual embeddings for 12 regional languages, and real-time policy updates [10].
connectivity with government databases, including the Kisan Deployment: Evaluated using domain metrics and de-
•
| Call    | Centre    | (KCC) | and        | agricultural |       | subsidy | portals.       | As a |        |     |            |             |     |     |     |
| ------- | --------- | ----- | ---------- | ------------ | ----- | ------- | -------------- | ---- | ------ | --- | ---------- | ----------- | --- | --- | --- |
|         |           |       |            |              |       |         |                |      | ployed | via | web/mobile | [11], [12]. |     |     |     |
| result, | the model | is    | fine-tuned | for          | tasks | such as | crop advisory, |      |        |     |            |             |     |     |     |
disease diagnosis, seasonal planning, fertilizer optimization, and Key Features:
| market        | price  | forecasting.  |           | GAT      | achieves    | a response   | accuracy    |     |                   |          |          |           |               |       |         |
| ------------- | ------ | ------------- | --------- | -------- | ----------- | ------------ | ----------- | --- | ----------------- | -------- | -------- | --------- | ------------- | ----- | ------- |
|               |        |               |           |          |             |              |             |     | • Domain-Aligned: |          | Trained  | on        | agri-specific | data. |         |
| of 89.6%      | and    | covers        | over      | 85%      | of key      | agricultural | topics,     |     |                   |          |          |           |               |       |         |
|               |        |               |           |          |             |              |             |     | • Multilingual:   |          | Supports | 12 Indian | languages     |       | + code- |
| significantly |        | outperforming |           | baseline | transformer |              | models.     | The |                   |          |          |           |               |       |         |
|               |        |               |           |          |             |              |             |     | mixed             | queries. |          |           |               |       |         |
| proposed      | system | is            | scalable, | fully    | trainable   |              | end-to-end, | and |                   |          |          |           |               |       |         |
effectively bridges the digital divide by providing accessible, • Grounded Responses: Anchored in verified government
accurateagriculturalassistancetoruralcommunities.Thisstudy data to reduce hallucinations.
| presents  | the     | complete      | development |               | pipeline |              | of Kisan-Mitra, |        |     |     |     |     |     |     |     |
| --------- | ------- | ------------- | ----------- | ------------- | -------- | ------------ | --------------- | ------ | --- | --- | --- | --- | --- | --- | --- |
| including | dataset | construction, |             | architectural |          | innovations, |                 | train- |     |     |     |     |     |     |     |
II. LITERATUREREVIEW
| ing strategies, |     | and deployment |     | approach. |     | Results | indicate | that |     |     |     |     |     |     |     |
| --------------- | --- | -------------- | --- | --------- | --- | ------- | -------- | ---- | --- | --- | --- | --- | --- | --- | --- |
task-specific transformer architectures—when grounded in local Globally,chatbottechnologyhasbeenleveragedtoimprove
| context    | and | institutional | integration—can |              |              | substantially | enhance   |     |                  |         |             |              |        |     |              |
| ---------- | --- | ------------- | --------------- | ------------ | ------------ | ------------- | --------- | --- | ---------------- | ------- | ----------- | ------------ | ------ | --- | ------------ |
|            |     |               |                 |              |              |               |           |     | agricultural     | support | systems.    | Nokkaew      | et al. | [1] | and Korir et |
| the impact | and | inclusivity   |                 | of AI-driven | agricultural |               | services. |     |                  |         |             |              |        |     |              |
|            |     |               |                 |              |              |               |           |     | al. [2] designed |         | educational | and advisory | bots   | for | farmers in   |
IndexTerms—Transformerarchitecture,AgriculturalAI,Gen-
ThailandandKenya,respectively.Magingaetal.[3]integrated
erativemodels,Multilingualchatbot,Domain-specificNLP,Gov-
ernment scheme integration, Kisan-Mitra, Rural technology, IoT for early crop disease detection, while Maduri et al. [4]
Indian agriculture, Natural language processing. introduced a general-purpose agricultural chatbot. In South
|     |     |     |     |     |     |     |     |     | Africa, Mkhwanazi |        | et al.        | [5] combined | deep        | learning | with |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ----------------- | ------ | ------------- | ------------ | ----------- | -------- | ---- |
|     |     |     |     |     |     |     |     |     | conversational    | agents | for localized |              | assistance. |          |      |
I. INTRODUCTION
|     |     |     |     |     |     |     |     |     | Indian | contributions | include | SMART |     | KISAN | by Yadav |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ------ | ------------- | ------- | ----- | --- | ----- | -------- |
Agriculture is the primary livelihood for millions in India, et al. [6], which aggregated various farmer services, and
especially smallholder farmers who lack real-time access to Krushi [7], which prioritized regional language accessibility.
reliableagronomicandpolicyinformation[1]–[3].Traditional
|     |     |     |     |     |     |     |     |     | Suebsombut | et  | al. [8] explored | smart | agri-chatbots |     | in South- |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | ---------- | --- | ---------------- | ----- | ------------- | --- | --------- |
outreach and existing AI solutions often fail to provide mul- east Asia, while Dhore and Dhakate [9] investigated chatbots
tilingual, context-aware, and actionable guidance tailored to for crop insurance.
India’s diverse farming communities [4], [5]. Other notable works include Kiruthika et al. [10] on agri-
To address this, we introduce Kisan-Mitra—a generative marketing bots, Suvarchala et al. [11] for cotton-specific
AI chatbot powered by the Generative Agricultural Trans- advisory, and Dhavale et al. [12], who experimented with
former (GAT). GAT integrates government schemes, agro- hybrid architectures combining CNNs, GANs, and LLMs.
Authorized licensed use limited to: International Institute of Information Technology-Raipur. Downloaded on June 26,2026 at 12:36:00 UTC from IEEE Xplore.  Restrictions apply.
|     | 979-8-3315-3772-2/25/$31.00 ©2025 IEEE |     |     |     |     |     |     | 1240 |     |     |     |     |     |     |     |
| --- | -------------------------------------- | --- | --- | --- | --- | --- | --- | ---- | --- | --- | --- | --- | --- | --- | --- |

Fig.1. DevelopmentpipelineofKisan-Mitra:Fromdatacollectiontodeployment,includingintegrationwithgovernmentdatabasesandweatherAPIs.
|     |     |     |     |     |     |     |     | Our proposed      |                | system,       | Kisan-Mitra, |                 | powered      |                 | by the Gen-   |
| --- | --- | --- | --- | --- | --- | --- | --- | ----------------- | -------------- | ------------- | ------------ | --------------- | ------------ | --------------- | ------------- |
|     |     |     |     |     |     |     |     | erative           | Agricultural   |               | Transformer  |                 | (GAT),       | addresses       | these         |
|     |     |     |     |     |     |     |     | limitations       | by             | incorporating |              | domain-specific |              | training,       | robust        |
|     |     |     |     |     |     |     |     | multilingual      | embeddings,    |               | and          | real-time       | integration  |                 | with gov-     |
|     |     |     |     |     |     |     |     | ernmental         | databases      |               | and weather  | APIs.           |              |                 |               |
|     |     |     |     |     |     |     |     | The comprehensive |                |               | design       | of              | Kisan-Mitra  |                 | enables it to |
|     |     |     |     |     |     |     |     | outperform        | existing       |               | solutions    | by addressing   |              | real-world      | agri-         |
|     |     |     |     |     |     |     |     | cultural          | challenges     | through       |              | localized,      | data-driven, |                 | and policy-   |
|     |     |     |     |     |     |     |     | informed          | conversational |               | AI.          |                 |              |                 |               |
|     |     |     |     |     |     |     |     |                   |                | III.          | METHODOLOGY  |                 |              |                 |               |
|     |     |     |     |     |     |     |     | This section      |                | presents      | the          | methodology     |              | for building    | Kisan-        |
|     |     |     |     |     |     |     |     | Mitra, a          | task-specific  |               | transformer  |                 | system       | tailored        | to provide    |
|     |     |     |     |     |     |     |     | Indian farmers    |                | with          | actionable   | insights        |              | on agricultural | poli-         |
|     |     |     |     |     |     |     |     | cies, schemes,    |                | and           | practices.   | The             | approach     | comprises       | two           |
maincomponents:thecustomtransformerarchitectureandthe
|     |     |     |     |     |     |     |     | end-to-end      | data | pipeline. |            |     |              |     |             |
| --- | --- | --- | --- | --- | --- | --- | --- | --------------- | ---- | --------- | ---------- | --- | ------------ | --- | ----------- |
|     |     |     |     |     |     |     |     | A. Architecture |      | Design:   | Generative |     | Agricultural |     | Transformer |
(GAT)
| Fig. 2. Architecture |     | of  | the Generative | Agricultural |     | Transformer | (GAT), |     |     |     |     |     |     |     |     |
| -------------------- | --- | --- | -------------- | ------------ | --- | ----------- | ------ | --- | --- | --- | --- | --- | --- | --- | --- |
featuring domain-specific attention, multilingual embeddings, and structured At the heart of our framework lies the Generative Agri-
datagrounding. cultural Transformer (GAT), a domain-adapted transformer
designedtohandleagriculturalqueriesgroundedinreal-world
|                     |              |                  |          |            |                 |         |              | policy and      | multilingual |            | use         | cases.          |                    |           |              |
| ------------------- | ------------ | ---------------- | -------- | ---------- | --------------- | ------- | ------------ | --------------- | ------------ | ---------- | ----------- | --------------- | ------------------ | --------- | ------------ |
| ANN-based           | assistants   |                  | [13],    | rule-based |                 | NLP     | systems like |                 |              |            |             |                 |                    |           |              |
|                     |              |                  |          |            |                 |         |              | 1) Key          | Components   |            | of GAT:     |                 |                    |           |              |
| AgroBot             | [14],        | and deep         | learning |            | solutions       | such    | as Agri-     |                 |              |            |             |                 |                    |           |              |
|                     |              |                  |          |            |                 |         |              | Custom          |              | Embedding  |             | Layer:          | Incorporates       |           | embeddings   |
| Aid [15]            | have         | also contributed |          | to the     | space.          | AGRIBOT | [16],        | •               |              |            |             |                 |                    |           |              |
|                     |              |                  |          |            |                 |         |              | for             | crop names,  |            | pest types, | agro-practices, |                    |           | and regional |
| interface-optimized |              | bots             | [17],    | and        | voice-driven    |         | FARMER’S     |                 |              |            |             |                 |                    |           |              |
|                     |              |                  |          |            |                 |         |              | linguistic      |              | tokens     | (Hindi,     | Marathi,        | Telugu,            | etc.),    | enabling     |
| ASSISTANT           | [18]         | further          | reflect  | the        | diversification |         | of conver-   |                 |              |            |             |                 |                    |           |              |
|                     |              |                  |          |            |                 |         |              | understanding   |              | of         | code-mixed  |                 | and transliterated |           | queries.     |
| sational            | agricultural | tools.           |          |            |                 |         |              |                 |              |            |             |                 |                    |           |              |
|                     |              |                  |          |            |                 |         |              | • AgriAttention |              | Mechanism: |             | A               | modified           | attention | mech-        |
A. Comparative Critique and Identified Gaps anism that emphasizes common agri-semantic pat-
|         |         |          |     |                   |     |           |        | terns, | such | as  | [Crop, | Season, |     | Pest] | triplets or |
| ------- | ------- | -------- | --- | ----------------- | --- | --------- | ------ | ------ | ---- | --- | ------ | ------- | --- | ----- | ----------- |
| Despite | growing | interest |     | and technological |     | progress, | exist- |        |      |     |        |         |     |       |             |
ing systems share critical limitations: [Subsidy, Eligibility, Location]relations.
|        |     |        |             |     |      |        |        | Schema-aware |     |     | Encoder: | Enhances |     | the | model’s rea- |
| ------ | --- | ------ | ----------- | --- | ---- | ------ | ------ | ------------ | --- | --- | -------- | -------- | --- | --- | ------------ |
| • Lack | of  | Domain | Adaptation: |     | Most | models | do not | •            |     |     |          |          |     |     |              |
incorporate agriculture-specific terminologies, leading to soning over structured knowledge, such as government
|              |               |                |            |             |         |          |             | scheme           | eligibility, |              | subsidy |            | amounts, | and                 | application |
| ------------ | ------------- | -------------- | ---------- | ----------- | ------- | -------- | ----------- | ---------------- | ------------ | ------------ | ------- | ---------- | -------- | ------------------- | ----------- |
| shallow      | understanding |                |            | of queries. |         |          |             |                  |              |              |         |            |          |                     |             |
|              |               |                |            |             |         |          |             | timelines        |              | by attending |         | to tabular |          | and semi-structured |             |
| • Inadequate |               | Multilingual   |            | Support:    |         | Many     | systems are |                  |              |              |         |            |          |                     |             |
| restricted   |               | to monolingual |            | or          | limited | regional | language    | metadata.        |              |              |         |            |          |                     |             |
|              |               |                |            |             |         |          |             | 2) Architectural |              | Advantages:  |         |            |          |                     |             |
| interaction, |               | ignoring       | code-mixed |             | usage.  |          |             |                  |              |              |         |            |          |                     |             |
MinimalStructuredKnowledgeIntegration:Fewplat- Robustness to Noisy Input: Character-level pre-
| •   |     |     |     |     |     |     |     | •   |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
forms utilize official government APIs, scheme data, or tokenization and embedding smoothing improve toler-
real-time policy updates. ance to rural query errors and spelling variations.
Authorized licensed use limited to: International Institute of Information Technology-Raipur. Downloaded on June 26,2026 at 12:36:00 UTC from IEEE Xplore.  Restrictions apply.
1241

TABLEI
COMPARATIVEEVALUATIONOFAGRICULTURALCHATBOTMODELSACROSSKEYDIMENSIONS
Model Domain Regional GovScheme Query Type Han- Intent Latency Deployment Architecture
|     |     |     | Specific | Language |     | Integration | dling |     | Accuracy |     | (ms) |     | Mode |     |     |
| --- | --- | --- | -------- | -------- | --- | ----------- | ----- | --- | -------- | --- | ---- | --- | ---- | --- | --- |
|     |     |     |          | Support  |     |             |       |     | (%)      |     |      |     |      |     |     |
Krushi[7] No Yes No FAQsOnly 68.5 320 Cloud-based (Di- Dialogflow Rule-
|     |     |     |     | (Limited) |     |     |     |     |     |     |     |     | alogflow) |     | Based |
| --- | --- | --- | --- | --------- | --- | --- | --- | --- | --- | --- | --- | --- | --------- | --- | ----- |
AgriAid[15] No No No BasicQ&A 64.2 410 MobileApp(Hy- CNN+LSTM
brid)
FARMER’S No Yes (Voice No VoiceCommands 66.3 480 MobileVoiceBot VoiceBot+NLP
| ASSISTANT[18] |     |     |     | Only) |     |     |     |     |     |     |     |     |     |     |     |
| ------------- | --- | --- | --- | ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
AgroBot[14] No No No PredefinedRules 61.8 350 WebChat NLP + Rule-
based
Kisan-Mitra Yes Yes (Mul- Yes (Real- Contextual + 89.4 190 Web + Mobile Custom Trans-
(Ours) (Agri- tilingual + Time) Complex + Offline former(GAT)
|     |     |     | Specific) | Code-Mix) |     |     |     |     |     |     |     |     | (Planned) |     |     |
| --- | --- | --- | --------- | --------- | --- | --- | --- | --- | --- | --- | --- | --- | --------- | --- | --- |
Multilingual Code-Mix Handling: Supports bilingual Noise Injection: Simulates realistic errors (typos, pho-
| •   |     |     |     |     |     |     |     | •   |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
queries (e.g., ” yojana kaise milegi?”) by aligning pho- netic mistakes) commonly found in speech-to-text and
netic transliterations with semantically similar embed- informal rural queries.
dings.
|     |     |     |     |     |     |     |     | 3)  | Alignment | with | Government |     | Scheme | Data: | To en- |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --------- | ---- | ---------- | --- | ------ | ----- | ------ |
• FactualResponseGeneration:Byintegratingstructured sure policy-grounded answers, KCC queries are semantically
|     | scheme        | data           | into the | attention | mechanism, |                      | GAT mini- |             |                 |             |           |            |         |             |           |
| --- | ------------- | -------------- | -------- | --------- | ---------- | -------------------- | --------- | ----------- | --------------- | ----------- | --------- | ---------- | ------- | ----------- | --------- |
|     |               |                |          |           |            |                      |           | linked      | with structured |             | scheme    | documents: |         |             |           |
|     | mizes         | hallucinations | and      | enhances  |            | factual correctness. |           |             |                 |             |           |            |         |             |           |
|     |               |                |          |           |            |                      |           | • Semantic  |                 | Query       | Labeling: |            | Queries | are labeled | with      |
|     |               |                |          |           |            |                      |           | relevant    |                 | schemes     | based     | on region, | crop,   | and         | intent.   |
| B.  | Data Pipeline |                | Design   |           |            |                      |           |             |                 |             |           |            |         |             |           |
|     |               |                |          |           |            |                      |           | Information |                 | Extraction: |           | Policy     | PDFs    | are         | converted |
•
| The | data | pipeline | supports | training |     | and fine-tuning | GAT |      |            |         |     |                   |     |     |          |
| --- | ---- | -------- | -------- | -------- | --- | --------------- | --- | ---- | ---------- | ------- | --- | ----------------- | --- | --- | -------- |
|     |      |          |          |          |     |                 |     | into | structured | triples |     | (e.g., [PM-Kisan, |     |     | Benefit, |
withacombinationofstructuredgovernmentdata,realfarmer 6000 per year]).
queries, and augmented multilingual samples. Context Fusion in Training: For each query, relevant
•
1) Dataset Attributes and Sources: We leverage the Kisan scheme data is retrieved and concatenated with input to
Call Center (KCC) dataset [19], which comprises real-world inform GAT’s generation process.
| farmer | queries | and    | expert        | responses. | Table     | II outlines | the key |        |                      |           |             |     |            |                |              |
| ------ | ------- | ------ | ------------- | ---------- | --------- | ----------- | ------- | ------ | -------------------- | --------- | ----------- | --- | ---------- | -------------- | ------------ |
|        |         |        |               |            |           |             |         | 4)     | Evaluation           | and       | Deployment: |     | The model  |                | is evaluated |
| fields | used    | in our | preprocessing |            | pipeline. |             |         |        |                      |           |             |     |            |                |              |
|        |         |        |               |            |           |             |         | using  | agriculture-specific |           | benchmarks, |     | including: |                |              |
|        |         |        |               |            |           |             |         | Answer |                      | Accuracy: | Measured    |     | against    | expert-curated | re-          |
•
TABLEII
sponses.
ATTRIBUTESFORFARMERQUERIES(KCCDATASET)
|     |     |     |     |     |     |     |     | Relevance |     | and | Hallucination |     | Rate: | Evaluates | ground- |
| --- | --- | --- | --- | --- | --- | --- | --- | --------- | --- | --- | ------------- | --- | ----- | --------- | ------- |
•
|     | S.No. | AttributeName |     | Description       |     |     |     | ing | in policy | data. |     |     |     |     |     |
| --- | ----- | ------------- | --- | ----------------- | --- | --- | --- | --- | --------- | ----- | --- | --- | --- | --- | --- |
|     | 1     | BlockName     |     | Farmer’sblockname |     |     |     |     |           |       |     |     |     |     |     |
2 DistrictName Farmer’sdistrict Oncevalidated,GATisdeployedviaamultilingualchatbot
3 StateName Farmer’sstate interface on web and mobile platforms. Offline deployment is
4 CreatedOn Dateandtimeofquery planned for low-connectivity regions.
|     | 5               | Season    |             | Agriculturalseason        |     |               |     |              |             |                          |                  |       |                |         |            |
| --- | --------------- | --------- | ----------- | ------------------------- | --- | ------------- | --- | ------------ | ----------- | ------------------------ | ---------------- | ----- | -------------- | ------- | ---------- |
|     | 6               | Category  |             | Typeofagriculturalconcern |     |               |     |              |             |                          |                  |       |                |         |            |
|     | 7               | Crop      |             | Mentionedcrop             |     |               |     |              |             | IV. RESULTSANDDISCUSSION |                  |       |                |         |            |
|     | 8               | QueryType |             | Intentcategory            |     |               |     |              |             |                          |                  |       |                |         |            |
|     |                 |           |             |                           |     |               |     | The          | deployment  |                          | of Kisan-Mitra   |       | has            | yielded | promising  |
|     | 9               | Sector    |             | Governmentsectortag       |     |               |     |              |             |                          |                  |       |                |         |            |
|     |                 |           |             |                           |     |               |     | outcomes     | in          | delivering               | accurate,        |       | contextual,    | and     | scheme-    |
|     | 10              | QueryText |             | Farmer’stextualquery      |     |               |     |              |             |                          |                  |       |                |         |            |
|     | 11              | KccAns    |             | Responseprovided          |     |               |     |              |             |                          |                  |       |                |         |            |
|     |                 |           |             |                           |     |               |     | grounded     | information |                          | to farmers.      |       | The fine-tuned |         | Generative |
|     |                 |           |             |                           |     |               |     | Agricultural |             | Transformer              | (GAT)            | model | significantly  |         | outper-    |
| 2)  | Domain-specific |           | Pretraining |                           | and | Augmentation: | The |              |             |                          |                  |       |                |         |            |
|     |                 |           |             |                           |     |               |     | forms        | baseline    | models                   | in comprehending |       | government     |         | scheme     |
GATmodelispretrainedonacombinationofdomain-specific nuances and handling real-world farmer queries.
documents:agriculturalblogs,extensionreports,schememan-
|       |     |           |       |              |     |            |            | A. Evaluation |     | Metrics |     |     |     |     |     |
| ----- | --- | --------- | ----- | ------------ | --- | ---------- | ---------- | ------------- | --- | ------- | --- | --- | --- | --- | --- |
| uals, | and | community | forum | discussions. |     | To further | enrich the |               |     |         |     |     |     |     |     |
model’s language and context understanding, we introduce The system was evaluated on a held-out test set derived
| multiple | augmentation |     | strategies: |     |     |     |     |      |         |            |        |       |         |     |            |
| -------- | ------------ | --- | ----------- | --- | --- | --- | --- | ---- | ------- | ---------- | ------ | ----- | ------- | --- | ---------- |
|          |              |     |             |     |     |     |     | from | aligned | Kisan Call | Center | (KCC) | queries | and | structured |
Back-Translation:Enhancessyntacticdiversitybytrans- government scheme documentation. We used the following
•
lating regional queries to English and back using multi- metrics to assess model performance:Accuracy, Precision,
|     | lingual | LLMs. |     |     |     |     |     | Recall, | F1-Score. |     |     |     |     |     |     |
| --- | ------- | ----- | --- | --- | --- | --- | --- | ------- | --------- | --- | --- | --- | --- | --- | --- |
Authorized licensed use limited to: International Institute of Information Technology-Raipur. Downloaded on June 26,2026 at 12:36:00 UTC from IEEE Xplore.  Restrictions apply.
1242

Fig. 3. System architecture of the Generative Agricultural Transformer (GAT), illustrating the integration of multilingual inputs, structured policy data, and
domain-specificattentionmechanisms.
|     |     | Fig.4. | Kisan-MitraDeployedasaLiveWebsiteInterface |     |     |     |     |
| --- | --- | ------ | ------------------------------------------ | --- | --- | --- | --- |
Table III summarizes the model’s performance across mul- TABLEIV
MODELCOMPARISONONSCHEMEUNDERSTANDING
| tiple languages | commonly used | by Indian | farmers. |       |     |                       |           |
| --------------- | ------------- | --------- | -------- | ----- | --- | --------------------- | --------- |
|                 |               |           |          | Model |     | F1-Score Multilingual | Context   |
|                 |               |           |          |       |     | Support               | Awareness |
TABLEIII
|     |     |     |     | RNN-BasedChatbot |     | 74.6% Limited | Poor |
| --- | --- | --- | --- | ---------------- | --- | ------------- | ---- |
PERFORMANCEMETRICSACROSSLANGUAGES
|     |     |     |     | BERT(Base) |     | 82.3% Moderate | Moderate |
| --- | --- | --- | --- | ---------- | --- | -------------- | -------- |
Language Accuracy Precision Recall F1-Score GPT-2(Fine-tuned) 86.7% Good Good
Hindi-English (Code- 91.2% 89.7% 92.5% 91.0% GAT(Ours) 91.0% Strong Excellent
mixed)
| Marathi | 88.3% | 87.1% | 89.5% 88.3% | C. Qualitative | Examples         |         |                        |
| ------- | ----- | ----- | ----------- | -------------- | ---------------- | ------- | ---------------------- |
| Telugu  | 86.5% | 85.9% | 87.0% 86.4% |                |                  |         |                        |
|         |       |       |             | Example        | 1 — Code-Mixed   | Query:  |                        |
| English | 92.7% | 93.2% | 91.1% 92.1% |                |                  |         |                        |
|         |       |       |             | • User         | Query: ”PM-Kisan | ka form | kab tak bhara ja sakta |
hai?”
| B. Baseline | Comparison |     |     |       |           |                  |                 |
| ----------- | ---------- | --- | --- | ----- | --------- | ---------------- | --------------- |
|             |            |     |     | GPT-2 | Response: | ”I’m not certain | about PM-Kisan. |
•
We benchmarked GAT against standard NLP models in- Please refer to official sources.”
cluding RNN-based systems, BERT, and GPT-2. Results in GAT Response: ”PM-Kisan registration is open year-
•
Table IV highlight the superior multilingual comprehension round. Eligible farmers can apply online or visit their
and contextual reasoning of our proposed model. nearest CSC center.”
Authorized licensed use limited to: International Institute of Information Technology-Raipur. Downloaded on June 26,2026 at 12:36:00 UTC from IEEE Xplore.  Restrictions apply.
1243

Example 2 — Ambiguous Query: [7] M. Momaya, A. Khanna, J. Sadavarte and M. Sankhe, ”Krushi – The
• User Query: ”Beej ke liye koi yojana hai kya?” Farmer Chatbot,” 2021 International Conference on Communication
information and Computing Technology (ICCICT), Mumbai, India,
• BERT Response: ”Yojana exists.” 2021,pp.1-6,doi:10.1109/ICCICT50803.2021.9510040.
• GAT Response: ”Haan, Seed Subsidy Scheme ke under, [8] P. Suebsombut, P. Sureephong, A. Sekhari, S. Chernbumroong and A.
farmers ko certified seeds saste daam par mil sakte hain. Bouras, ”Chatbot Application to Support Smart Agriculture in Thai-
land,”2022 JointInternational ConferenceonDigital Arts,Mediaand
Applicationkestepskeliyeapnelocalagricultureofficer
TechnologywithECTINorthernSectionConferenceonElectrical,Elec-
se contact karen. ” tronics,ComputerandTelecommunicationsEngineering(ECTIDAMT
NCON),ChiangRai,Thailand,2022,pp.364-367,doi:10.1109/ECTI-
These examples highlight GAT’s capability to produce
DAMTNCON53731.2022.9720318.
grounded,context-awareresponsescomparedtobaselinemod- [9] M. L. Dhore and M. Dhakate, ”Insurance Value Chain Chatbot for
els that often return generic or incomplete information. Farmers,” 2022 2nd Asian Conference on Innovation in Technology
(ASIANCON), Ravet, India, 2022, pp. 1-6, doi: 10.1109/ASIAN-
D. Scalability and Latency CON55314.2022.9909387.
[10] U. Kiruthika, S. K. S. Raja, V. Balaji and C. J. Raman, ”E-
Quantization-aware training reduced GAT’s inference la-
Agriculture for Direct Marketing of Food Crops Using Chatbots,”
tency by 30% with minimal performance loss. Average 2020 International Conference on Power, Energy, Control and Trans-
response time is 320 ms on mid-tier cloud GPUs. mission Systems (ICPECTS), Chennai, India, 2020, pp. 1-4, doi:
10.1109/ICPECTS49113.2020.9337024.
The model is deployed via a containerized REST API on
[11] T. Lahari Suvarchala, P. Chandana and T. Anuradha, ”NLP based
scalable cloud infrastructure, integrated with web and mobile Cotton Crop Advisory: A Dialogflow - Powered Chatbot,” 2023
platforms (see Figure 4). 3rd International Conference on Innovative Mechanisms for Industry
Applications (ICIMIA), Bengaluru, India, 2023, pp. 512-516, doi:
V. CONCLUSION 10.1109/ICIMIA60377.2023.10426124.
[12] C.Dhavale,T.Pawar,A.Singh,S.PoleandK.Sabat,””Revolutionizing
Kisan-Mitra delivers policy-aware, multilingual support to Farming:GAN-EnhancedImaging,CNNDiseaseDetection,andLLM
Indianfarmersusingthedomain-adaptedGATmodel.Iteffec- Farmer Assistant”,” 2024 2nd International Conference on Computer,
Communication and Control (IC4), Indore, India, 2024, pp. 1-6, doi:
tively handles linguistic diversity and context-specific queries
10.1109/IC457434.2024.10486501.
with high accuracy and real-time responsiveness. [13] N. Chandolikar, C. Dale, T. Koli, M. Singh and T. Narkhede,
Key Highlights: ”Agriculture Assistant Chatbot Using Artificial Neural Network,”
2022 International Conference on Advanced Computing Technologies
• GAT Architecture: Domain-specific attention enables and Applications (ICACTA), Coimbatore, India, 2022, pp. 1-5, doi:
precise scheme understanding. 10.1109/ICACTA54488.2022.9753433.
• MultilingualSupport:Handlesregionalandcode-mixed [14] A. Marla, R. Paul, A. K. Saha, N. K. Basha and B. Anandhakrish-
nan, ”An AgroBot: Natural Language Processing Based Chatbot for
queries.
Farmers,”20234thInternationalConferenceonSmartElectronicsand
• EfficientPerformance:HighF1-scoreswithlowlatency. Communication (ICOSEC), Trichy, India, 2023, pp. 1235-1241, doi:
• Real-World Impact: Strong early adoption and user 10.1109/ICOSEC58147.2023.10276356.
[15] N. Ilakiyaselvan, A. Dhandapani, K. Khadar Nawas and A.
satisfaction.
Bhattacharya, ”AgriAid: An Intelligent Farmer Companion Us-
ing Deep Learning Approach,” 2024 International Conference on
REFERENCES
Intelligent and Innovative Technologies in Computing, Electrical
[1] A. Nokkaew, S. Chuechote, T. Poonpaiboonpipat and W. Poonpai- and Electronics (IITCEE), Bangalore, India, 2024, pp. 1-6, doi:
boonpipat, ”Integration of Context-Based Learning with Informative 10.1109/IITCEE59897.2024.10467751.
Chatbot for Grassroots Farmers,” 2023 11th International Conference [16] C. Chathurya, D. Sachdeva and M. Arora, ”Agriculture Chat-
on Information and Education Technology (ICIET), Fujisawa, Japan, bot(AGRIBOT)Using Natural Language Processing,” 2023 14th Inter-
2023,pp.136-140,doi:10.1109/ICIET56899.2023.10111435. national Conference on Computing Communication and Networking
[2] M.K.Korir,W.MwangiandM.W.Kimwele,”ArtificialIntelligence- Technologies(ICCCNT),Delhi,India,2023,pp.1-5,doi:10.1109/IC-
Based Chatbot Model Providing Expert Advice to Potato Farmers in CCNT56998.2023.10306512.
Kenya,” 2023 IEEE AFRICON, Nairobi, Kenya, 2023, pp. 1-6, doi: [17] D.Sawant,A.Jaiswal,J.SinghandP.Shah,”AgriBot-Anintelligent
10.1109/AFRICON55910.2023.10293557. interactive interface to assist farmers in agricultural activities,” 2019
[3] T. Maginga, J. Nsenga, P. Bakunzibake and E. Masabo, ”Smallholder IEEEBombaySectionSignatureConference(IBSSC),Mumbai,India,
farmer-centricintegrationofIoTandChatbotforearlyMaizediseases 2019,pp.1-6,doi:10.1109/IBSSC47189.2019.8973066.
detectionandmanagementinpre-visualsymptomsphase,”2022IEEE [18] K. D. M, D. M S, V. K. V, M. Jaincy D E, K. R A and S.
GlobalHumanitarianTechnologyConference(GHTC),SantaClara,CA, Kumar R M, ”FARMER’S ASSISTANT using AI Voice Bot,” 2021
USA,2022,pp.369-372,doi:10.1109/GHTC55712.2022.9911047. 3rd International Conference on Signal Processing and Communica-
[4] P. K. Maduri, P. Dhiman, M. R. Shukla, S. Anand and S. P. Singh, tion (ICPSC), Coimbatore, India, 2021, pp. 527-531, doi: 10.1109/IC-
”FarmersAgricultureAssistanceChatbot,”20213rdInternationalCon- SPC51351.2021.9451760.
ference on Advances in Computing, Communication Control and Net- [19] https://kcc-chakshu.icar.gov.in/index.html
working (ICAC3N), Greater Noida, India, 2021, pp. 1884-1889, doi:
10.1109/ICAC3N53548.2021.9725634.
[5] P. Mkhwanazi, A. Adegun and M. Adigun, ”Deep Learning-Based
Digital Assistant for Farmers in South Africa,” 2023 International
Conference onScience, Engineering andBusiness for SustainableDe-
velopment Goals (SEB-SDG), Omu-Aran, Nigeria, 2023, pp. 1-4, doi:
10.1109/SEB-SDG57117.2023.10124564.
[6] T. Yadav, P. Sable and D. Kalbande, ”SMART KISAN: A Mobile
App for Farmers’ Assistance in Agricultural Activities,” 2023 Inter-
national Conference on Smart Systems for applications in Electrical
Sciences (ICSSES), Tumakuru, India, 2023, pp. 1-6, doi: 10.1109/IC-
SSES58299.2023.10199471.
Authorized licensed use limited to: International Institute of Information Technology-Raipur. Downloaded on June 26,2026 at 12:36:00 UTC from IEEE Xplore. Restrictions apply.
1244