# DNS Configuration for growthewild.earth

After deploying to GitHub Pages, configure your DNS settings with your domain registrar:

## DNS Records to Add:

### Option 1: Using CNAME (Recommended for www subdomain)
```
Type: CNAME
Name: www
Value: maxmizzi.github.io
TTL: 3600
```

### Option 2: Using A Records (For apex/root domain)
Add these four A records:
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

### CNAME for www to redirect to apex
```
Type: CNAME
Name: www
Value: growthewild.earth
TTL: 3600
```

## After DNS Configuration:

1. Wait for DNS propagation (can take 24-48 hours, usually faster)
2. Go to GitHub repository settings → Pages
3. Enter `growthewild.earth` in the Custom Domain field
4. Wait for DNS check to pass
5. Enable "Enforce HTTPS" (will be available after DNS verification)

## Verify DNS:
```bash
dig growthewild.earth
dig www.growthewild.earth
```

Your site will be live at:
- https://growthewild.earth
- https://www.growthewild.earth
