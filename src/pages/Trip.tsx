import { MapPin, Star, Calendar, Search, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { trips, features } from "../data/mockData";
import { useState } from "react";

type ErrorType = {
  destination?: string;
  date?: string;
  travelers?: string;
};

export default function Trip() {
  const [form, setForm] = useState({
    destination: "",
    date: "",
    travelers: "",
  });

  const [errors, setErrors] = useState<ErrorType>({});

  const [showNext, setShowNext] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    const newErrors: ErrorType = {};
  
    if (!form.destination.trim()) {
      newErrors.destination = "Destination required";
    }
  
    if (!form.date) {
      newErrors.date = "Select date";
    }
  
    if (!form.travelers || Number(form.travelers) < 1) {
      newErrors.travelers = "Enter travelers";
    }
  
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length === 0) {
      setShowNext(true);
    }
  };
  
  return (
    <div className="min-h-screen bg-slate-50 text-gray-700">
      <section className="relative min-h-screen overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl text-5xl font-bold md:text-7xl"
          >
            Discover Your Next Dream Journey
          </motion.h1>

          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Find the best destinations, affordable packages and unforgettable
            experiences.
          </p>

          {/* Form */}
          <div className="mt-8 grid w-full max-w-5xl gap-3 rounded-3xl bg-white p-4 text-left text-slate-900 shadow-2xl md:grid-cols-4">
            {/* Destination */}
            <div>
              <input
                type="text"
                name="destination"
                value={form.destination}
                onChange={handleChange}
                placeholder="Where to?"
                className="w-full rounded-xl border px-4 py-3 outline-none"
              />
              {errors.destination && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.destination}
                </p>
              )}
            </div>

            {/* Date Picker */}
            <div>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full rounded-xl border px-4 py-3 outline-none"
              />
              {errors.date && (
                <p className="mt-1 text-sm text-red-500">{errors.date}</p>
              )}
            </div>

            {/* Travelers */}
            <div>
              <input
                type="number"
                min="1"
                name="travelers"
                value={form.travelers}
                onChange={handleChange}
                placeholder="Travelers"
                className="w-full rounded-xl border px-4 py-3 outline-none"
              />
              {errors.travelers && (
                <p className="mt-1 text-sm text-red-500">{errors.travelers}</p>
              )}
            </div>

            {/* Button */}
            <button
              onClick={handleSearch}
              className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-sky-600 text-white hover:bg-sky-700"
            >
              <Search className="h-4 w-4" />
              Search
            </button>
          </div>

          {/* Next UI */}
          {showNext && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 w-full max-w-3xl rounded-3xl bg-white p-6 text-slate-900 shadow-2xl"
            >
              <h2 className="text-2xl font-bold">Trip Summary</h2>

              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-slate-100 p-4">
                  <p className="text-sm text-slate-500">Destination</p>
                  <p className="font-semibold">{form.destination}</p>
                </div>

                <div className="rounded-2xl bg-slate-100 p-4">
                  <p className="text-sm text-slate-500">Date</p>
                  <p className="font-semibold">{form.date}</p>
                </div>

                <div className="rounded-2xl bg-slate-100 p-4">
                  <p className="text-sm text-slate-500">Travelers</p>
                  <p className="font-semibold">{form.travelers}</p>
                </div>
              </div>

              <button className="mt-6 w-full rounded-2xl bg-green-600 py-3 text-white hover:bg-green-700">
                Continue Booking
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl bg-white p-6 shadow-md flex flex-col items-center"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100">
                  <Icon className="h-6 w-6 text-sky-600" />
                </div>

                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Popular Trips</h2>
            <p className="text-slate-600">
              Trending packages chosen by travelers
            </p>
          </div>
          <button className="rounded-2xl border px-5 py-2 hover:bg-slate-100">
            View All
          </button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {trips.map((trip, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl bg-white shadow-lg"
            >
              <div className="relative">
                <img src={trip.img} className="h-64 w-full object-cover" />
                <button className="absolute right-4 top-4 rounded-full bg-white p-2 shadow">
                  <Heart className="h-4 w-4" />
                </button>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold">{trip.title}</h3>
                    <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                      <MapPin className="h-4 w-4" />
                      India
                    </p>
                  </div>
                  <span className="rounded-xl bg-amber-500 px-3 py-1 text-sm text-white">
                    <Star className="mr-1 inline h-3 w-3 fill-white" />
                    {trip.rating}
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {trip.days}
                  </span>
                  <span className="text-xl font-bold text-slate-900">
                    {trip.price}
                  </span>
                </div>
                <button className="mt-5 w-full rounded-2xl bg-sky-600 py-3 text-white hover:bg-sky-700">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-4xl font-bold">
              Ready for your next adventure?
            </h2>
            <p className="mt-4 text-white/80">
              Sign up and get exclusive deals, hidden gems and early offers
              directly in your inbox.
            </p>
          </div>

          <div className="flex gap-3">
            <input
              placeholder="Enter email"
              className="h-12 w-full rounded-2xl border border-white/20 bg-white/10 px-4 text-white outline-none placeholder:text-white/60"
            />

            <button className="h-12 rounded-2xl bg-white px-6 text-slate-900 hover:bg-white/90">
              Join
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
