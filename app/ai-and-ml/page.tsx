import { Header } from "@/components/header2"
import { Session } from "@/components/session"
import { ServiceFeatures } from "@/components/service_features"
import { Projects } from "@/components/projects2"
import { WHyCodeFort } from "@/components/why_codefort"
import { Footer } from "@/components/footer2"

export const metadata = {
  title: 'Artificial Intelligence & Machine Learning | CodeFort Tech', // Specific title
  description: 'Expert AI & ML development services to build intelligent solutions that automate processes, unlock data insights, and drive innovation. From concept to deployment',
  keywords: ['ai', 'ml', 'machine learning', 'artificial intelligence', 'deep learning', 'neural networks', 'natural language processing', 'nlp', 'computer vision', 'generative ai', 'large language models', 'llms', 'reinforcement learning', 'supervised learning', 'unsupervised learning', 'predictive analytics', 'robotics process automation', 'rpa', 'expert systems', 'model training', 'data science', 'feature engineering', 'algorithm development', 'model deployment', 'mlops', 'aiops', 'data pipeline', 'model inference', 'hyperparameter tuning', 'transfer learning', 'model fine-tuning', 'convolutional neural networks', 'cnns', 'recurrent neural networks', 'rnns', 'transformers', 'generative adversarial networks', 'gans', 'autoencoders', 'decision trees', 'random forests', 'support vector machines', 'svms', 'diffusion models', 'tensorflow', 'pytorch', 'scikit-learn', 'hugging face', 'openai api', 'langchain', 'llamaindex', 'amazon sagemaker', 'google vertex ai', 'microsoft azure ml', 'jupyter notebooks', 'kubeflow', 'mlflow', 'chatbots', 'conversational ai', 'recommendation systems', 'autonomous vehicles', 'fraud detection', 'sentiment analysis', 'speech recognition', 'image recognition', 'code generation', 'ai agents', 'autonomous agents', 'predictive maintenance', 'drug discovery', 'neural machine translation', 'responsible ai', 'ai ethics', 'explainable ai', 'xai', 'ai bias', 'algorithmic bias', 'model fairness', 'ai safety', 'ai governance', 'model hallucination', 'intelligent automation', 'cognitive computing', 'ai-driven development', 'ai integration', 'ai solutions', 'data-centric ai', 'edge ai', 'ai-as-a-service', 'ai aas'],
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header page="ai-and-ml" image="/_next/service-4-hero.webp"/>
      <Session />
      <ServiceFeatures />
     <Projects />
     <WHyCodeFort />
      <Footer />
    </main>
  )
}
