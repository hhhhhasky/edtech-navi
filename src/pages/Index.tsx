import { useState, useEffect } from "react";
import { GraduationCap, BookOpen, FileText, Image, Video, Users, FileCheck, MessageSquare, FlaskConical, Sparkles, PenTool, Calculator, Globe, Atom } from "lucide-react";
import ToolCard from "@/components/ToolCard";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "lesson-prep", name: "AI 辅助备课", icon: BookOpen },
  { id: "courseware", name: "AI 课件制作", icon: FileText },
  { id: "visual", name: "AI 视觉素材", icon: Image },
  { id: "video", name: "AI 视频与动画", icon: Video },
  { id: "interaction", name: "AI 课堂互动", icon: Users },
  { id: "assessment", name: "AI 出题与评估", icon: FileCheck },
  { id: "grading", name: "AI 批改与反馈", icon: MessageSquare },
  { id: "research", name: "AI 科研与写作", icon: FlaskConical },
  { id: "chinese", name: "语文教学工具", icon: BookOpen },
  { id: "subject-tools", name: "学科专项工具", icon: GraduationCap },
  { id: "other", name: "其他工具", icon: Sparkles },
];

const tools = {
  "lesson-prep": [
    {
      name: "豆包",
      description: "字节跳动推出的免费全能AI助手,支持生成图片/视频、写作、编程,特别适合教师备课和课程设计。",
      link: "https://www.doubao.com",
      tags: ["免费", "中文"],
      logo: "🎒"
    },
    {
      name: "Kimi智能助手",
      description: "月之暗面推出的AI助手,擅长长文本处理,可以快速阅读和总结教学资料,生成详细的教案。",
      link: "https://kimi.moonshot.cn",
      tags: ["免费", "中文"],
      logo: "🌙"
    },
    {
      name: "DeepSeek",
      description: "幻方量化推出的AI智能助手,强大的推理能力,适合教师进行深度教学内容设计和学科知识拓展。",
      link: "https://www.deepseek.com",
      tags: ["免费", "中文"],
      logo: "🔍"
    },
    {
      name: "通义千问",
      description: "阿里推出的全能AI助手,通情达义,可以协助教师完成教案撰写、知识拓展和教学设计。",
      link: "https://tongyi.aliyun.com",
      tags: ["免费", "中文"],
      logo: "📘"
    },
    {
      name: "腾讯元宝",
      description: "腾讯推出的免费AI智能助手,支持文档分析、内容生成,适合教师整理和创作教学材料。",
      link: "https://yuanbao.tencent.com",
      tags: ["免费", "中文"],
      logo: "💎"
    },
    {
      name: "文心一言",
      description: "百度出品的AI助手,特别适合中文教学场景,可以生成教案、教学设计和课程资料。",
      link: "https://yiyan.baidu.com",
      tags: ["免费", "中文"],
      logo: "🔷"
    },
    {
      name: "讯飞星火",
      description: "科大讯飞推出的AI助手,在中文理解和教育场景应用上表现优异,支持生成各类教学文档。",
      link: "https://xinghuo.xfyun.cn",
      tags: ["免费", "中文"],
      logo: "✨"
    },
    {
      name: "智谱清言",
      description: "智谱推出的全能AI助手,基于ChatGLM大模型,适合教学内容创作和知识问答。",
      link: "https://chatglm.cn",
      tags: ["免费", "中文"],
      logo: "🎓"
    },
    {
      name: "ChatGPT",
      description: "OpenAI推出的最强大AI对话助手,可以帮助教师生成教案、教学大纲、课程设计等内容。",
      link: "https://chat.openai.com",
      tags: ["付费", "中文友好"],
      logo: "🤖"
    },
  ],
  "courseware": [
    {
      name: "AiPPT",
      description: "国产AI PPT生成工具,一键快速生成高质量PPT,支持中文场景,特别适合教师制作课件。",
      link: "https://www.aippt.cn",
      tags: ["部分免费", "中文"],
      logo: "📊"
    },
    {
      name: "希沃白板",
      description: "专为互动教学设计的AI课件生成器,支持多种教学工具和互动功能,深受一线教师喜爱。",
      link: "https://easinote.seewo.com",
      tags: ["免费", "中文"],
      logo: "📝"
    },
    {
      name: "咔片PPT",
      description: "AI PPT制作工具,设计美化全流程自动化,轻松生成精美课件,提升教学展示效果。",
      link: "https://www.cappt.cn",
      tags: ["部分免费", "中文"],
      logo: "🎬"
    },
    {
      name: "博思AIPPT",
      description: "PPT效率神器,AI一键生成PPT,支持多种模板风格,让教师快速完成课件制作。",
      link: "https://www.pptgo.cn",
      tags: ["部分免费", "中文"],
      logo: "💼"
    },
    {
      name: "讯飞智文",
      description: "科大讯飞推出的智能文档助手,一键生成PPT和Word,支持AI配图和排版优化。",
      link: "https://zhiwen.xfyun.cn",
      tags: ["部分免费", "中文"],
      logo: "📑"
    },
    {
      name: "Gamma",
      description: "革命性的AI PPT制作工具,只需输入主题,即可在1分钟内生成包含图文的完整PPT初稿。",
      link: "https://gamma.app",
      tags: ["部分免费", "英文"],
      logo: "γ"
    },
    {
      name: "Beautiful.ai",
      description: "智能PPT设计平台,提供专业模板,自动优化排版,让教师轻松制作美观的演示文稿。",
      link: "https://www.beautiful.ai",
      tags: ["付费", "英文"],
      logo: "🎨"
    },
    {
      name: "Tome",
      description: "AI驱动的故事讲述工具,可以将教学内容转化为引人入胜的视觉演示,支持多种媒体格式。",
      link: "https://tome.app",
      tags: ["部分免费", "英文"],
      logo: "📖"
    },
  ],
  "visual": [
    {
      name: "即梦",
      description: "抖音旗下免费AI图片创作工具,支持多种风格,操作简单,适合教师快速生成教学配图。",
      link: "https://jimeng.jianying.com",
      tags: ["免费", "中文"],
      logo: "✨"
    },
    {
      name: "通义万相",
      description: "阿里推出的AI创意内容生成平台,支持图片生成、编辑和设计,适合制作教学视觉素材。",
      link: "https://tongyi.aliyun.com/wanxiang",
      tags: ["部分免费", "中文"],
      logo: "🌈"
    },
    {
      name: "堆友AI",
      description: "免费AI绘画和生图神器,提供多种艺术风格,适合教师创作独特的教学插图和课件素材。",
      link: "https://d.design",
      tags: ["免费", "中文"],
      logo: "🎨"
    },
    {
      name: "文心一格",
      description: "百度推出的AI作画工具,中文友好,可以快速生成各类教学插图和创意图片。",
      link: "https://yige.baidu.com",
      tags: ["部分免费", "中文"],
      logo: "🎭"
    },
    {
      name: "可灵AI",
      description: "快手推出的AI图像和视频创作平台,支持高质量图片生成,适合制作教学素材。",
      link: "https://klingai.kuaishou.com",
      tags: ["部分免费", "中文"],
      logo: "🪄"
    },
    {
      name: "Midjourney",
      description: "顶级AI绘画工具,可以生成高质量的教学插图、概念图和视觉素材,为课件增添专业视觉效果。",
      link: "https://www.midjourney.com",
      tags: ["付费", "需Discord"],
      logo: "🌟"
    },
    {
      name: "DALL·E 3",
      description: "OpenAI推出的AI绘画工具,可以根据文字描述生成精美图片,适合制作教学配图和示意图。",
      link: "https://openai.com/dall-e-3",
      tags: ["付费", "英文"],
      logo: "🖼️"
    },
  ],
  "video": [
    {
      name: "即梦AI",
      description: "抖音推出的一站式AI视频、图片、数字人创作工具,操作简单,适合教师制作生动的教学视频。",
      link: "https://jimeng.jianying.com",
      tags: ["免费", "中文"],
      logo: "🎥"
    },
    {
      name: "可灵AI",
      description: "快手推出的AI视频生成工具,支持文本生成视频,可以快速创作教学演示视频。",
      link: "https://klingai.kuaishou.com",
      tags: ["部分免费", "中文"],
      logo: "🎞️"
    },
    {
      name: "智谱清影",
      description: "智谱推出的免费AI视频生成工具,支持文本、图片生成视频,适合制作教学动画和演示。",
      link: "https://chatglm.cn/video",
      tags: ["免费", "中文"],
      logo: "🎭"
    },
    {
      name: "海螺视频",
      description: "MiniMax公司推出的AI视频生成工具,支持长视频生成,适合制作完整的教学内容。",
      link: "https://hailuoai.com",
      tags: ["部分免费", "中文"],
      logo: "🐚"
    },
    {
      name: "剪映",
      description: "字节跳动旗下视频编辑工具,集成AI字幕、配音、特效等功能,适合制作短视频教学内容。",
      link: "https://www.capcut.cn",
      tags: ["免费", "中文"],
      logo: "✂️"
    },
    {
      name: "Runway",
      description: "强大的AI视频编辑工具,支持文本生成视频、视频编辑等功能,让教师轻松制作教学视频。",
      link: "https://runwayml.com",
      tags: ["部分免费", "英文"],
      logo: "🎬"
    },
    {
      name: "Synthesia",
      description: "AI虚拟人视频生成平台,可以创建由AI主播讲解的教学视频,支持多语言,无需真人出镜。",
      link: "https://www.synthesia.io",
      tags: ["付费", "多语言"],
      logo: "👤"
    },
  ],
  "interaction": [
    {
      name: "希沃白板",
      description: "专为互动教学设计的AI课件工具,内置丰富的互动组件和游戏化教学功能,提升课堂参与度。",
      link: "https://easinote.seewo.com",
      tags: ["免费", "中文"],
      logo: "🏫"
    },
    {
      name: "Kahoot!",
      description: "全球流行的互动教学平台,可以创建有趣的问答游戏,提升课堂参与度和学习兴趣。",
      link: "https://kahoot.com",
      tags: ["部分免费", "多语言"],
      logo: "🎮"
    },
    {
      name: "Mentimeter",
      description: "实时互动演示工具,支持投票、问答、词云等多种互动形式,让课堂更加生动活跃。",
      link: "https://www.mentimeter.com",
      tags: ["部分免费", "英文"],
      logo: "📊"
    },
    {
      name: "ClassIn",
      description: "专业在线教室平台,支持多种互动工具和AI辅助功能,打造沉浸式线上教学体验。",
      link: "https://www.classin.com",
      tags: ["部分免费", "中文"],
      logo: "💻"
    },
  ],
  "assessment": [
    {
      name: "问卷星",
      description: "专业问卷调查平台,可以快速创建各类测验和评估问卷,支持数据分析和报告生成。",
      link: "https://www.wjx.cn",
      tags: ["部分免费", "中文"],
      logo: "📋"
    },
    {
      name: "Quizlet",
      description: "智能学习工具,可以快速生成题库、闪卡和测验,支持多种题型,帮助学生高效复习。",
      link: "https://quizlet.com",
      tags: ["部分免费", "多语言"],
      logo: "📝"
    },
    {
      name: "Formative",
      description: "实时评估平台,可以创建各类练习和测验,实时查看学生答题情况,及时调整教学策略。",
      link: "https://www.formative.com",
      tags: ["部分免费", "英文"],
      logo: "✅"
    },
  ],
  "grading": [
    {
      name: "作业帮AI批改",
      description: "针对中小学教师的AI批改工具,可以快速批改客观题和部分主观题,提供详细反馈。",
      link: "https://www.zybang.com",
      tags: ["免费", "中文"],
      logo: "✍️"
    },
    {
      name: "Gradescope",
      description: "AI辅助批改平台,可以快速批改作业和考试,支持多种题型,大幅减少教师工作量。",
      link: "https://www.gradescope.com",
      tags: ["部分免费", "英文"],
      logo: "📄"
    },
  ],
  "research": [
    {
      name: "蛙蛙写作",
      description: "AI小说和内容创作工具,支持长文本生成,适合教师进行教学案例和课程内容创作。",
      link: "https://wawawriter.com",
      tags: ["部分免费", "中文"],
      logo: "🐸"
    },
    {
      name: "讯飞绘文",
      description: "科大讯飞推出的免费AI写作工具,5分钟生成一篇原创稿,适合教师快速撰写教学文档。",
      link: "https://peiyin.xfyun.cn",
      tags: ["免费", "中文"],
      logo: "📝"
    },
    {
      name: "笔灵AI写作",
      description: "面向专业写作领域的AI写作工具,支持论文、报告等多种文体,提升教师写作效率。",
      link: "https://ibiling.cn",
      tags: ["部分免费", "中文"],
      logo: "🖊️"
    },
    {
      name: "新华妙笔",
      description: "新华社推出的体制内办公学习平台,适合教师撰写正式的教学文档和工作报告。",
      link: "https://miaobi.xinhuaskl.com",
      tags: ["部分免费", "中文"],
      logo: "📰"
    },
    {
      name: "秘塔写作猫",
      description: "AI写作工具,支持语法检查、文章润色、智能改写,帮助教师提升写作质量。",
      link: "https://xiezuocat.com",
      tags: ["部分免费", "中文"],
      logo: "🐱"
    },
    {
      name: "ChatPDF",
      description: "AI文档阅读助手,可以快速提取PDF中的关键信息,帮助教师高效阅读和整理学术文献。",
      link: "https://www.chatpdf.com",
      tags: ["部分免费", "多语言"],
      logo: "📚"
    },
    {
      name: "Grammarly",
      description: "AI写作助手,提供语法检查、风格优化等功能,帮助教师撰写高质量的学术论文和教学文档。",
      link: "https://www.grammarly.com",
      tags: ["部分免费", "英文"],
      logo: "✏️"
    },
    {
      name: "Notion AI",
      description: "集成在Notion中的AI助手,可以辅助论文写作、文献整理、思维导图等,提升科研效率。",
      link: "https://www.notion.so/product/ai",
      tags: ["付费", "多语言"],
      logo: "📓"
    },
  ],
  "chinese": [
    {
      name: "汉字笔顺演示工具",
      description: "基于国家规范的汉字学习交互式工具，通过动态笔顺演示和九宫格参照，解决汉字书写教学痛点。教师上课演示、学生自主练习，直观展现。",
      link: "https://www.ai910.cn/",
      tags: ["免费", "中文", "语文"],
      logo: "✏️"
    },
    {
      name: "学生背诵过关可视化工具",
      description: "从繁琐的纸质记录中解放出来，让背诵检查工作变得轻松有趣。以直观、高效且富有乐趣的交互方式进行数字化管理。",
      link: "https://www.ai910.cn/",
      tags: ["免费", "中文", "背诵"],
      logo: "📖"
    },
    {
      name: "诗词飞花令",
      description: "内置海量诗词库，支持指定关键字飞花令，以游戏化形式开展课堂积累活动，激活学生语文学习兴趣。",
      link: "https://www.ai910.cn/",
      tags: ["免费", "中文", "游戏化"],
      logo: "🌸"
    },
    {
      name: "成语填空挑战",
      description: "成语库丰富，支持自定义关卡，以游戏化形式帮助学生积累成语知识，提升语文素养。",
      link: "https://www.ai910.cn/",
      tags: ["免费", "中文", "成语"],
      logo: "🎯"
    },
  ],
  "subject-tools": [
    {
      name: "TopoExport",
      description: "专业的2D向量地图和3D地形模型服务平台，使用权威数据源，特别适合教育场景，免费导出选项让师生无需成本即可获取高质量地图和模型。",
      link: "https://www.ai910.cn/webnav/dili/show/790.html",
      tags: ["免费", "地理", "3D模型"],
      logo: "🗺️"
    },
    {
      name: "三角形内角和演示工具",
      description: "支持拖动三角形顶点改变形状，实时显示三个内角数值及总和，结合剪拼动画演示内角和推导过程，适配初中几何入门教学。",
      link: "https://www.ai910.cn/",
      tags: ["免费", "数学", "几何"],
      logo: "📐"
    },
    {
      name: "交互式正弦函数演示工具",
      description: "滑动振幅、周期、相位参数，实时观察波形变化，同步显示函数公式与坐标图，帮助高中学生理解参数对函数图像的影响。",
      link: "https://www.ai910.cn/",
      tags: ["免费", "数学", "函数"],
      logo: "📈"
    },
    {
      name: "二元一次方程求解工具",
      description: "输入方程后，分步演示消元法/代入法解题过程，标注每一步依据，同时生成同类练习题，适配课堂例题讲解。",
      link: "https://www.ai910.cn/",
      tags: ["免费", "数学", "方程"],
      logo: "🧮"
    },
    {
      name: "牛顿第一定律演示",
      description: "通过无摩擦/有摩擦两种场景的动态模拟，展示小球在不同阻力下的运动状态，直观解释惯性与阻力的关系。",
      link: "https://www.ai910.cn/",
      tags: ["免费", "物理", "力学"],
      logo: "⚙️"
    },
    {
      name: "小车相遇问题演示工具",
      description: "动态呈现两车相向/同向运动过程，实时标注路程、速度、时间数据，自动计算相遇时间，验证运动学公式。",
      link: "https://www.ai910.cn/",
      tags: ["免费", "物理", "运动学"],
      logo: "🚗"
    },
    {
      name: "地球公转与月球轨道演示",
      description: "基于精确天文数据建模，动态展示地球四季更替与月球阴晴圆缺的对应关系，标注黄赤交角、近地点/远地点等关键概念。",
      link: "https://www.ai910.cn/",
      tags: ["免费", "地理", "天文"],
      logo: "🌍"
    },
  ],
  "other": [
    {
      name: "秘塔AI搜索",
      description: "最好用的AI搜索工具,没有广告,直达结果,帮助教师快速查找教学资料和学科知识。",
      link: "https://metaso.cn",
      tags: ["免费", "中文"],
      logo: "🔍"
    },
    {
      name: "夸克AI",
      description: "集AI搜索、网盘、文档、创作等功能于一体的应用,适合教师整理和管理教学资源。",
      link: "https://quark.sm.cn",
      tags: ["免费", "中文"],
      logo: "⚛️"
    },
    {
      name: "扣子Coze",
      description: "字节跳动推出的AI智能体开发平台,教师可以创建个性化的教学助手和互动工具。",
      link: "https://www.coze.cn",
      tags: ["免费", "中文"],
      logo: "🤖"
    },
    {
      name: "Canva",
      description: "多功能设计平台,提供海量模板和AI设计助手,可以制作海报、信息图、课件等各类教学素材。",
      link: "https://www.canva.com",
      tags: ["部分免费", "多语言"],
      logo: "🎨"
    },
    {
      name: "石墨文档",
      description: "在线协作文档工具,支持多人实时编辑,集成AI助手,方便教师团队协作备课。",
      link: "https://shimo.im",
      tags: ["部分免费", "中文"],
      logo: "📄"
    },
  ],
};

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = categories.map(cat => ({
        id: cat.id,
        element: document.getElementById(cat.id)
      }));

      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveCategory(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-hero backdrop-blur-sm border-b border-white/20 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-2">
            <GraduationCap className="w-8 h-8 text-white" />
            <h1 className="text-3xl font-bold text-white">AI工具教师导航</h1>
          </div>
          <p className="text-white/90 text-sm">专为教师打造的AI工具精选指南 · 提升教学效率,创新教学方法</p>
        </div>
      </header>

      {/* Category Navigation */}
      <nav className="sticky top-[113px] z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => scrollToCategory(category.id)}
                  className="flex items-center gap-2 whitespace-nowrap flex-shrink-0"
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </Button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {categories.map((category) => {
          const Icon = category.icon;
          const categoryTools = tools[category.id as keyof typeof tools] || [];
          
          // 如果没有工具，跳过该分类
          if (categoryTools.length === 0) return null;
          
          return (
            <section key={category.id} id={category.id} className="mb-20 scroll-mt-32">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">{category.name}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryTools.map((tool, index) => (
                  <ToolCard
                    key={index}
                    name={tool.name}
                    description={tool.description}
                    link={tool.link}
                    tags={tool.tags}
                    logo={tool.logo}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </main>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">AI工具教师导航</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              本网站致力于为教师群体精选最实用的AI工具,帮助教师提升教学效率,创新教学方法。
              我们会持续更新和优化工具库,为教育工作者提供最新、最好用的AI助手。
            </p>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>
                <strong>免责声明:</strong>
                本站仅提供工具信息导航服务,不对第三方工具的功能、安全性和服务质量负责。
                请教师在使用前仔细阅读各工具的使用条款和隐私政策。
              </p>
              <p className="mt-4 text-xs">
                © 2025 AI工具教师导航 · 用AI赋能教育,让教学更高效
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
