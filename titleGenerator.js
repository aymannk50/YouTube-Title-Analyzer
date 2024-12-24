async function generateTitles(existingTitles) {
    try {
        const knowledgeBaseTitles = [
            "How I Ranked #1 in 21 Hours with AI SEO",
            "How to Bypass AI Detectors with GPT-0t",
            "How to Make $150,000 Per Month w/ SEO Partnerships",
            "Google NotebookLM AI SEO Is INSANE",
            "How I Ranked #1 in 10 Hours with AI SEO",
            "How to Rank #1 with GPT-0t in 1 Click",
            "OpenAI GPT-0t is OUTRAGEOUSLY good...",
            "This NEW OpenAI GPT-0t Feature Is Crazy",
            "I Ranked #1 With AI SEO To Prove It's Not Luck",
            "Earn $1,250+ Per WEEK With Pinterest Affiliate Marketing",
            "Make $3,842/Day With Google Search For FREE",
            "How I Make $3520 Per Month With Affiliate Marketing Using AI",
            "Make Money on YouTube in 5 Minutes ($350+/Day)",
            "Earn $2,500/Week Using Pinterest 10 Mins Daily!",
            "GENIUS Way To Make Money With Affiliate Marketing Using AI",
            "Copy My $800/Day Affiliate Marketing Method For FREE",
            "Make Your First $500 With Pinterest Affiliate Marketing",
            "FAILPROOF Affiliate Marketing Strategy That Makes $1,046 Per Week",
            "Turn a Screenshot Into a Working App with Claude",
            "I Used AI to Build This $900k/mo App in A Day",
            "NEW Claude 3.5: Sonnet Is Better Than GPT-4o",
            "Claude Can Now Autonomously Interact with External Data",
            "Behind the Scenes: Prompting tips for Claude.ai",
            "Claude 3.5 Sonnet Data Analysis Full Guide!",
            "Claude Articles Explained: Let's Build A Game & Website With AI",
            "TikTok AI SEO: Go to 419 MILLION Traffic",
            "YouTube AI SEO Automation: 0 to 24k Traffic in 24 Hours",
            "LinkedIn AI SEO: 0 to 225 MILLION Traffic",
            "TikTok AI SEO: 0 to 33.7 MILLION Traffic",
            "Make $4,851/Day With Claude School",
            "How to Rank with Claude & Perplexity AI SEO",
            "Claude 3.5 Sonnet VS ChatGPT-4o: Best FREE AI SEO Tool",
            "How I Got BILLIONS of Traffic with E-EAT"
        ];

        const systemPrompt = `You are a YouTube title optimization expert. Analyze these successful titles and create 5 new engaging titles under 70 characters each. Format your response as plain text with one title per line.

Knowledge Base Titles (Use these as pattern references):
${knowledgeBaseTitles.join('\n')}

Current Niche Titles:
${existingTitles.map(t => t.title).join('\n')}

Key patterns to follow:
1. Use numbers and specific results (e.g., "$150,000 Per Month", "21 Hours")
2. Include time frames (e.g., "Per Month", "Per Day", "in 21 Hours")
3. Use attention-grabbing words (e.g., "INSANE", "OUTRAGEOUSLY", "GENIUS")
4. Incorporate current trends (AI, SEO, specific tools)
5. Show proof or credibility (e.g., "How I...", "Proof", "FAILPROOF")
6. Use monetary values when relevant
7. Keep titles under 70 characters

Response format example:
Title 1
Title 2
Title 3
Title 4
Title 5`;
        
        const userPrompt = "Create 5 engaging YouTube titles based on the patterns in both the knowledge base and current niche titles. Return only the titles, one per line.";
        
        const response = await invokeAIAgent(systemPrompt, userPrompt);
        
        // Split response by newlines and clean up
        const titles = response
            .split('\n')
            .map(title => title.trim())
            .filter(title => title.length > 0)
            .slice(0, 5)
            .map(title => title.substring(0, 70));

        if (titles.length === 0) {
            throw new Error('No valid titles generated');
        }

        return titles;
    } catch (error) {
        reportError(error);
        throw new Error('Failed to generate titles: ' + error.message);
    }
}
