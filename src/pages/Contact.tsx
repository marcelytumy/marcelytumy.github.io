// Define social media links with icons
const contactMethods = [
  {
    name: 'Email',
    value: 'sprechender@proton.me',
    icon: 'far fa-envelope',
    link: 'mailto:sprechender@proton.me',
    color: '#BB86FC'
  },
  {
    name: 'GitHub',
    value: 'marcelytumy',
    icon: 'fab fa-github',
    link: 'https://github.com/marcelytumy',
    color: '#6e5494'
  },
  {
    name: 'X / Twitter',
    value: '@marcelytumy',
    icon: 'fab fa-twitter',
    link: 'https://x.com/marcelytumy',
    color: '#1DA1F2'
  },
  {
    name: 'Discord',
    value: 'ytumy',
    icon: 'fab fa-discord',
    link: 'https://discordapp.com/users/1023660503060455505',
    color: '#5865F2'
  }
];

const Contact = () => {
  return (
    <div className="p-8 h-[500px] overflow-y-auto fade-in">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Contact Card */}
        <div className="bg-gradient-to-br from-surface-light to-surface p-1 rounded-lg">
          <div className="bg-surface p-6 rounded-md">
            <h3 className="text-xl text-white mb-4">Get In Touch</h3>
            <p className="text-gray-400 mb-6">
              Feel free to reach out through any of these platforms. I'm always open to new opportunities and collaborations!
            </p>
            
          </div>
        </div>
        
        {/* Quick Message */}
        <div className="bg-surface-light p-6 rounded-lg">
          
        <div className="space-y-4">
              {contactMethods.map(method => (
                <a 
                  key={method.name} 
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-lg hover:bg-surface-light transition-colors group border border-transparent hover:border-border"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-background mr-4 transition-transform group-hover:scale-110">
                    <i className={`${method.icon} text-lg`} style={{ color: method.color }}></i>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">{method.name}</div>
                    <div className="text-gray-200">{method.value}</div>
                  </div>
                  <i className="fas fa-arrow-right ml-auto opacity-0 group-hover:opacity-100 text-accent transition-opacity"></i>
                </a>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;