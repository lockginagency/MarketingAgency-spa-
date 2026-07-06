import { socials, contacts, agencyName } from '@/app/data/content';

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <h2>Давайте работать вместе</h2>
            <p>Расскажите о проекте — подберём решение под ваш бюджет.</p>
          </div>
          <div className="footer-contacts">
            <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
            <a href={`tel:${contacts.phone.replace(/\D/g, '')}`}>
              {contacts.phone}
            </a>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {agencyName}</span>
          <div className="footer-socials">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
