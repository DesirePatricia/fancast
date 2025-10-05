using System;
using DotNetEnv;
using Supabase;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;


Env.Load();

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

// Enable CORS for React dev server
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:3000") // React dev server
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

string supabaseUrl = Environment.GetEnvironmentVariable("SUPABASE_URL");
string supabaseKey = Environment.GetEnvironmentVariable("SUPABASE_KEY");

var supabase = new Client(supabaseUrl, supabaseKey);
await supabase.InitializeAsync(); // 🔑 required

builder.Services.AddSingleton(supabase);
builder.Services.AddControllers();

var app = builder.Build();
app.MapControllers();
app.Run();
